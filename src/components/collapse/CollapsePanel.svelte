<div class="{baseClasses}">
  <div
    class="{prefixCls}-header"
    aria-expanded="{active}"
    on:click="{togglePanel}">
    {#if !hideArrow}
      <svelte:component
        this="{expandIcon}"
        class="{prefixCls}-arrow"
        rotate="{active ? 90 : null}" />
    {/if}
    <slot name="header">{header}</slot>
  </div>
  <div class="{contentClasses}">
    <div class="{prefixCls}-content-box">
      <slot />
    </div>
  </div>
</div>

<script>
  import { getContext } from "svelte";
  import classNames from "classnames";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  // ********************** Props **********************

  // Key to identify and select the panel
  export let key;
  // Header content
  export let header = "";
  // Disable the panel
  export let disabled = false;
  // Ability to hide the collpase arrow icon
  export let hideArrow = false;

  // this exports the classObj as class so we can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // ********************** /Props **********************

  // Store from parent
  let collapseStore = getContext("collapseStore");
  // Store the last key clicked
  let lastKeyClickedStore = getContext("lastKeyClickedStore");
  // Whether accordion mode is set
  let accordion = false;
  // Whether the panel is active
  let active = false;
  // Base classes
  let baseClasses;
  // Content classes
  let contentClasses;

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  const prefixCls = getPrefixCls("collapse");

  $: active = $collapseStore.activeKey.includes(key);
  $: accordion = $collapseStore.isAccordion;
  $: expandIcon = $collapseStore.expandIcon;
  $: usingCustomActiveKey = $collapseStore.usingCustomActiveKey;

  // we make the classObj an object so we can add it to the classNames func.
  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: baseClasses = classNames({
    ...classObj,
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-no-arrow`]: hideArrow,
    [`${prefixCls}-item-active`]: active,
    [`${prefixCls}-item-disabled`]: disabled
  });

  $: contentClasses = classNames({
    [`${prefixCls}-content`]: true,
    [`${prefixCls}-content-active`]: active,
    [`${prefixCls}-content-inactive`]: !active
  });

  function togglePanel() {
    if (disabled) return;
    // Add empty object to ensure this always triggers the click event
    // even if the key is the same as the last time cicked
    lastKeyClickedStore.set({ key, unique: {} });
    if (active) {
      $collapseStore = {
        ...$collapseStore,
        activeKey: usingCustomActiveKey
          ? $collapseStore.activeKey
          : $collapseStore.activeKey.filter(storedKey => storedKey !== key)
      };
    } else {
      if (accordion) {
        $collapseStore = {
          ...$collapseStore,
          activeKey: usingCustomActiveKey ? $collapseStore.activeKey : [key]
        };
      } else {
        $collapseStore = {
          ...$collapseStore,
          activeKey: usingCustomActiveKey
            ? $collapseStore.activeKey
            : [...$collapseStore.activeKey, key]
        };
      }
    }
  }
</script>
