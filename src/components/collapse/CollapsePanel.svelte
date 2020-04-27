<div class="ant-collapse-item" class:ant-collapse-item-active="{active}">
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

  // ********************** /Props **********************

  // Store from parent Collapse component
  let activeKeyStore = getContext("activeKeyStore");
  // Whether the panel is active
  let active = false;
  // Initial icon rotation

  $: active = $activeKeyStore.includes(key);

  function togglePanel() {
    if (active) {
      activeKeyStore.set(
        $activeKeyStore.filter(storedKey => storedKey !== key)
      );
    } else {
      activeKeyStore.set([...$activeKeyStore, key]);
    }
  }
</script>
