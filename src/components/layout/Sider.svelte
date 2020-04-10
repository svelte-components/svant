<aside {...divProps} {...$$restProps}>
  <div class="{`${prefixCls}-children`}">
    <slot />
  </div>
  {#if collapsible || (below && zeroWidthTrigger)}
    {#if zeroWidthTrigger}
      <span
        on:click="{toggle}"
        class="{zeroWidthTriggerClasses}"
        tyle="{zeroWidthTriggerStyle}">
        <BarsOutlined />
      </span>
    {:else if !hideTrigger}
      <div
        class="{`${prefixCls}-trigger`}"
        on:click="{toggle}"
        bind:this="{triggerWrapper}"
        style="{`width:${siderWidth};`}">
        <slot name="trigger" />
        {#if !triggerExists()}
          <svelte:component this="{defaultTrigger}" />
        {/if}
      </div>
    {/if}
  {/if}
</aside>

<script context="module">
  // matchMedia polyfill for
  // https://github.com/WickyNilliams/enquire.js/issues/82
  if (typeof window !== "undefined") {
    const matchMediaPolyfill = mediaQuery => {
      return {
        media: mediaQuery,
        matches: false,
        addListener() {},
        removeListener() {}
      };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }

  const dimensionMaxMap = {
    xs: "479.98px",
    sm: "575.98px",
    md: "767.98px",
    lg: "991.98px",
    xl: "1199.98px",
    xxl: "1599.98px"
  };

  const generateId = (() => {
    let i = 0;
    return (prefix = "") => {
      i += 1;
      return `${prefix}${i}`;
    };
  })();
</script>

<script>
  import {
    createEventDispatcher,
    getContext,
    onDestroy,
    onMount
  } from "svelte";
  import isNumeric from "../_util/isNumeric";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";
  import BarsOutlined from "../icons/BarsOutlined.svelte";
  import { ArrowLeftOutlined, ArrowRightOutlined } from "../icons";
  import classNames from "classnames";
  import Icon from "../icons/base/Icon.svelte";

  const dispatch = createEventDispatcher();

  let customizePrefixCls;
  export { customizePrefixCls as prefixCls };
  let customClasses;
  export { customClasses as class };
  export let collapsible = false;
  export let collapsed = null;
  export let hideTrigger = false;
  export let defaultCollapsed = false;
  export let reverseArrow = false;
  export let zeroWidthTriggerStyle = "";
  export let trigger = null;
  export let width = 200;
  let cwidth = 80;
  let collapsedWidth;
  export { cwidth as collapsedWidth };
  export let breakpoint = null;
  export let theme = "dark";

  const uniqueId = generateId("ant-sider-");
  let below = false;
  let belowShow = false;
  let mql = null;
  let matchMedia;
  let zeroWidthTriggerClasses;
  let rawWidth;
  let siderWidth;
  let status;
  let defaultTrigger;
  let zeroWidthTrigger;
  let triggerWrapper;
  let divStyle;
  let siderCls;
  let divProps;
  let iconComp;

  const siderHook = getContext("$siderHook");
  const config = getContext(CONFIG_KEY) || configProvider();

  if (typeof window !== "undefined") {
    matchMedia = window.matchMedia;
  }

  const getPrefixCls = $config.getPrefixCls;
  const prefixCls = getPrefixCls("layout-sider", customizePrefixCls);

  let sCollapsed;
  $: if (collapsed != null) {
    sCollapsed = collapsed;
  } else {
    sCollapsed = defaultCollapsed;
  }

  $: iconComp = {
    expanded: reverseArrow ? ArrowRightOutlined : ArrowLeftOutlined,
    collapsed: reverseArrow ? ArrowLeftOutlined : ArrowRightOutlined
  };

  $: if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
    mql = matchMedia(`(max-width: ${dimensionMaxMap[breakpoint]})`);
  }

  $: {
    collapsedWidth = parseFloat(String(cwidth || 0));

    zeroWidthTrigger = collapsedWidth === 0;

    rawWidth = sCollapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    status = sCollapsed ? "collapsed" : "expanded";
    defaultTrigger = iconComp[status];
    zeroWidthTriggerClasses = `${prefixCls}-zero-width-trigger ${prefixCls}-zero-width-trigger-${
      reverseArrow ? "right" : "left"
    }`;

    divStyle = `flex: 0 0 ${siderWidth}; max-width: ${siderWidth}; min-width: ${siderWidth}; width:${siderWidth}`;
    siderCls = classNames(prefixCls, customClasses, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!sCollapsed,
      [`${prefixCls}-has-trigger`]:
        collapsible && triggerExists() && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    });
    divProps = {
      class: siderCls,
      style: divStyle
    };
  }

  onMount(() => {
    if (mql) {
      mql.addListener(responsiveHandler);
      responsiveHandler(mql);
    }

    if (siderHook.addSider) {
      siderHook.addSider(uniqueId);
    }
  });

  onDestroy(() => {
    if (mql) {
      mql.removeListener(responsiveHandler);
    }

    if (siderHook.removeSider) {
      siderHook.removeSider(uniqueId);
    }
  });

  function triggerExists() {
    if (!triggerWrapper) {
      return false;
    }
    return triggerWrapper.children[0].getAttribute("slot") === "trigger";
  }

  function responsiveHandler(mql) {
    below = mql.matches;
    dispatch("breakpoint", mql.matches);
    if (sCollapsed !== mql.matches) {
      setCollapsed(mql.matches, "responsive");
    }
  }

  function setCollapsed(_collapsed, type) {
    if (collapsed == null) {
      sCollapsed = _collapsed;
    }
    dispatch("collapse", { collapsed: _collapsed, type });
  }

  function toggle() {
    setCollapsed(!sCollapsed, "clickTrigger");
  }
</script>
