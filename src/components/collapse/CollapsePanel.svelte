<div
  class="ant-collapse-item"
  class:ant-collapse-item-active="{active}"
  class:ant-collapse-item-disabled="{disabled}">
  <div
    class="ant-collapse-header"
    aria-expanded="{active}"
    on:click="{togglePanel}">
    <RightOutlined class="ant-collapse-arrow" rotate="{active ? 90 : null}" />
    {#if typeof header === 'function'}
      <svelte:component this="{header}" />
    {:else}{header}{/if}
  </div>
  {#if active}
    <div
      transition:slide="{{ duration: 400, easing: expoInOut }}"
      class="ant-collapse-content ant-collapse-content-{active ? '' : 'in'}active">
      <div class="ant-collapse-content-box">
        <slot />
      </div>
    </div>
  {/if}
</div>

<script>
  import { getContext } from "svelte";
  import { RightOutlined } from "@/components/icons";
  import { slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  // ********************** Props **********************

  // Key to identify and select the panel
  export let key;
  // Header content
  export let header;
  // Disable the panel
  export let disabled = false;

  // ********************** /Props **********************

  // Store from parent Collapse component that has the active keys
  let activeKeyStore = getContext("activeKeyStore");
  // Store from parent Collapse component that has the accordion status
  let isAccordionStore = getContext("isAccordionStore");
  // Whether accordion mode is set
  let accordion = false;
  // Whether the panel is active
  let active = false;
  // Initial icon rotation

  $: active = $activeKeyStore.includes(key);
  $: accordion = $isAccordionStore;

  function togglePanel() {
    if (disabled) return;
    if (active) {
      activeKeyStore.set(
        $activeKeyStore.filter(storedKey => storedKey !== key)
      );
    } else {
      accordion
        ? activeKeyStore.set([key])
        : activeKeyStore.set([...$activeKeyStore, key]);
    }
  }
</script>
