<div
  class="ant-collapse-item {className}"
  class:ant-collapse-no-arrow="{hideArrow}"
  class:ant-collapse-item-active="{active}"
  class:ant-collapse-item-disabled="{disabled}">
  <div
    class="ant-collapse-header"
    aria-expanded="{active}"
    on:click="{togglePanel}">
    {#if !hideArrow}
      <svelte:component
        this="{expandIcon}"
        class="ant-collapse-arrow"
        rotate="{active ? 90 : null}" />
    {/if}
    <slot name="header">{header}</slot>
  </div>
  <div
    class="ant-collapse-content ant-collapse-content-{active ? '' : 'in'}active">
    <div class="ant-collapse-content-box">
      <slot />
    </div>
  </div>
</div>

<script>
  import { getContext } from "svelte";

  // ********************** Props **********************

  // Key to identify and select the panel
  export let key;
  // Header content
  export let header = "";
  // Disable the panel
  export let disabled = false;
  // Custom CSS class
  export let className = "";
  // Ability to hide the collpase arrow icon
  export let hideArrow = false;

  // ********************** /Props **********************

  // Store from parent
  let collapseStore = getContext("collapseStore");
  // Store the last key clicked
  let lastKeyClickedStore = getContext("lastKeyClickedStore");
  // Whether accordion mode is set
  let accordion = false;
  // Whether the panel is active
  let active = false;

  $: active = $collapseStore.activeKey.includes(key);
  $: accordion = $collapseStore.isAccordion;
  $: expandIcon = $collapseStore.expandIcon;
  $: usingCustomActiveKey = $collapseStore.usingCustomActiveKey;

  function togglePanel() {
    if (disabled) return;
    // Add empty object to ensure this always triggers the click event
    // even if the key is the same as the last time cicked
    lastKeyClickedStore.set({ key, unique: {} });
    if (active) {
      collapseStore.set({
        ...$collapseStore,
        activeKey: usingCustomActiveKey
          ? $collapseStore.activeKey
          : $collapseStore.activeKey.filter(storedKey => storedKey !== key)
      });
    } else {
      if (accordion) {
        collapseStore.set({
          ...$collapseStore,
          activeKey: usingCustomActiveKey ? $collapseStore.activeKey : [key]
        });
      } else {
        collapseStore.set({
          ...$collapseStore,
          activeKey: usingCustomActiveKey
            ? $collapseStore.activeKey
            : [...$collapseStore.activeKey, key]
        });
      }
    }
  }
</script>
