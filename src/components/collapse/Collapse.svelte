<div class="{baseClasses}">
  <slot />
</div>

<script>
  import { setContext, getContext, createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import classNames from "classnames";
  import { RightOutlined } from "@/components/icons";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // Sets the default open panel(s)
  export let defaultActiveKey = "";
  // Manually override the keys for more control of what opens and when
  export let activeKey = null;
  // Accordion mode only allows one panel open at a time
  export let accordion = false;
  // Borderless version
  export let borderless = false;
  // Custom expand icon
  export let expandIcon = RightOutlined;
  // Icon position can be left or right
  export let expandIconPosition = "";
  // This exports the classObj as class so we can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // ********************** /Props **********************

  // Class name for the icon positon - set below
  let iconPositonClassName = "";
  // Classes for the collapse wrapper
  let baseClasses = "";

  // we make the classObj an object so we can add it to the classNames func.
  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls, direction } = $config;
  const prefixCls = getPrefixCls("collapse");

  const collapseStore = writable({
    activeKey: [],
    isAccordion: false,
    expandIcon,
    usingCustomActiveKey: false
  });

  setContext("collapseStore", collapseStore);

  $: $collapseStore = {
    activeKey:
      activeKey ||
      (typeof defaultActiveKey === "object"
        ? defaultActiveKey
        : [defaultActiveKey]),
    isAccordion: !!accordion,
    expandIcon,
    usingCustomActiveKey: activeKey
  };

  // Need a separate store for last key clicked so the main store watchers don't interfere
  const lastKeyClickedStore = writable({});
  setContext("lastKeyClickedStore", lastKeyClickedStore);

  // on:change event
  $: dispatch("change", {
    currentActiveKey: $collapseStore.activeKey
  });

  $: dispatch("click", {
    lastKeyClicked: $lastKeyClickedStore.key
  });

  $: iconPositonClassName = (function() {
    const baseClassString = `${prefixCls}-icon-position-`;
    const leftClass = baseClassString + "left";
    const rightClass = baseClassString + "right";
    if (expandIconPosition && !["right", "left"].includes(expandIconPosition)) {
      console.warn(
        `Unsupported value '${expandIconPosition}' used for the expandIconPosition prop on the Collapse component. Valid values are 'right' or 'left'`
      );
    }
    if (!expandIconPosition) {
      return direction === "rtl" ? rightClass : leftClass;
    }
    return expandIconPosition === "right" ? rightClass : leftClass;
  })();

  $: baseClasses = classNames(prefixCls, iconPositonClassName, {
    ...classObj,
    [`${prefixCls}-borderless`]: borderless,
    [`${prefixCls}-rtl`]: direction === "rtl"
  });
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
