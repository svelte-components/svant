<li class="{classes}" role="menuitem" on:click="{onClick}">
  {#if icon}
    <svelte:component this="{icon}" />
  {/if}
  <slot />
</li>

<script>
  import classNames from "classnames";
  import { getContext, createEventDispatcher, onMount, tick } from "svelte";
  import { CONFIG_KEY, configProvider } from "@/provider/config-provider";

  const config = getContext(CONFIG_KEY) || configProvider();
  const { getPrefixCls } = $config;
  const prefixCls = getPrefixCls("menu-item");

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // icon to show before the title
  export let icon = null;
  // Disabled state
  export let disabled = false;
  // Unique id of the item - used to set selected
  export let key = null;
  // this exports the classObj as class so the user can set class={{'abc':true}}
  let classObj = null;
  export { classObj as class };

  // ********************** /Props **********************
  let classes;
  let isSelected;
  let menuStore = getContext("menuStore");
  let submenuStore = getContext("submenuStore");

  onMount(async () => {
    // Make sure submenuStore context exists before setting the item to it
    await tick();

    if (submenuStore && key) {
      $submenuStore.items = [...$submenuStore.items, key];
    }
  });

  $: isSelected = menuStore && key && $menuStore.selectedKeys.includes(key);

  $: if (typeof classObj === "string") {
    classObj = {
      [classObj]: true
    };
  }

  $: classes = classNames(prefixCls, {
    ...classObj,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-selected`]: isSelected
  });

  function onClick() {
    if (disabled) return;
    // We want a global click event on the parent menu
    // We handle dispatching that event in the Menu component
    // when this value changes
    $menuStore.itemClicked = key;

    // Close the popup if this is a submenu item
    if (submenuStore) {
      $submenuStore.showPopup = false;
    }
  }
</script>
