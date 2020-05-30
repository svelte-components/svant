<!-- <li
  class="ant-menu-submenu ant-menu-submenu-horizontal
  ant-menu-overflowed-submenu"
  role="menuitem"
  style="display: none;">
  <div
    class="ant-menu-submenu-title"
    role="button"
    aria-expanded="false"
    aria-haspopup="true">
    <span>···</span>
    <i class="ant-menu-submenu-arrow"></i>
  </div>
</li> -->

<li
  class="{classes}"
  role="menuitem"
  on:mouseenter="{() => {
    $submenuStore.showPopup = true;
  }}"
  on:mouseleave="{() => {
    $submenuStore.showPopup = false;
  }}">
  <div
    class="{prefixCls}-submenu-title"
    role="button"
    aria-expanded="false"
    aria-haspopup="true">
    {#if icon}
      <svelte:component this="{icon}" />
    {/if}
    {title}
    <i class="{prefixCls}-submenu-arrow"></i>
  </div>

  <div class="{popupClasses}">
    <ul direction="ltr" class="{popupMenuClasses}" role="menu">
      <slot />
    </ul>
  </div>
</li>

<script>
  import classNames from "classnames";
  import { writable } from "svelte/store";
  import { getContext, setContext } from "svelte";
  import intersection from "lodash-es/intersection";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  const prefixCls = getPrefixCls("menu");

  // ********************** Props **********************

  // Unique id of the item - used to set selected
  export let key = null;
  // Title will show as the item text
  export let title;
  // icon to show before the title
  export let icon = null;
  // Disabled state
  export let disabled = false;
  // this exports the classObj as class so the user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // ********************** /Props **********************

  let showPopup = false;
  let classes;
  let popupClasses;
  let popupMenuClasses;
  let isSelected;
  let menuStore = getContext("menuStore");
  let submenuStore = writable({
    items: [],
    showPopup: false
  });
  setContext("submenuStore", submenuStore);

  // If the submenu's key or any of it's children's keys are selected
  $: if (menuStore) {
    const { selectedKeys } = $menuStore;
    if (key && selectedKeys.includes(key)) {
      isSelected = true;
    } else if (intersection($submenuStore.items, selectedKeys).length) {
      isSelected = true;
    } else {
      isSelected = false;
    }
  }

  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: classes = classNames(
    [`${prefixCls}-submenu`, `${prefixCls}-submenu-${$menuStore.mode}`],
    {
      ...classObj,
      [`${prefixCls}-submenu-disabled`]: disabled,
      [`${prefixCls}-submenu-selected`]: isSelected
    }
  );

  $: popupClasses = classNames(
    [
      prefixCls,
      `${prefixCls}-submenu`,
      `${prefixCls}-submenu-popup`,
      `${prefixCls}-submenu-placement-bottomLeft`
    ],
    {
      [`${prefixCls}-light`]: true,
      [`${prefixCls}-submenu-hidden`]: !$submenuStore.showPopup
    }
  );

  $: popupMenuClasses = classNames(
    [prefixCls, `${prefixCls}-sub`, `${prefixCls}-vertical`],
    {
      [`${prefixCls}-hidden`]: !$submenuStore.showPopup
    }
  );
</script>
