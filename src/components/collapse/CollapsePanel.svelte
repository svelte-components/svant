<div
  class="ant-collapse-item {className}"
  class:ant-collapse-item-active="{active}"
  class:ant-collapse-item-disabled="{disabled}">
  <div
    class="ant-collapse-header"
    aria-expanded="{active}"
    on:click="{togglePanel}">
    <svelte:component
      this="{expandIcon}"
      class="ant-collapse-arrow"
      rotate="{active ? 90 : null}" />
    {#if typeof header === 'function'}
      <svelte:component this="{header}" />
    {:else}{header}{/if}
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
  import { slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  // ********************** Props **********************

  // Key to identify and select the panel
  export let key;
  // Header content
  export let header;
  // Disable the panel
  export let disabled = false;
  // Custom CSS class
  export let className = "";

  // ********************** /Props **********************

  // Store from parent
  let collapseStore = getContext("collapseStore");
  // Whether accordion mode is set
  let accordion = false;
  // Whether the panel is active
  let active = false;

  $: active = $collapseStore.activeKey.includes(key);
  $: accordion = $collapseStore.isAccordion;
  $: expandIcon = $collapseStore.expandIcon;

  function togglePanel() {
    if (disabled) return;
    if (active) {
      collapseStore.set({
        ...$collapseStore,
        activeKey: $collapseStore.activeKey.filter(
          storedKey => storedKey !== key
        )
      });
    } else {
      if (accordion) {
        collapseStore.set({
          ...$collapseStore,
          activeKey: [key]
        });
      } else {
        collapseStore.set({
          ...$collapseStore,
          activeKey: [...$collapseStore.activeKey, key]
        });
      }
    }
  }
</script>
