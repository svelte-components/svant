<div
  class="ant-collapse ant-collapse-icon-position-left"
  class:ant-collapse-borderless="{borderless}">
  <slot />
</div>

<script>
  import { setContext, createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // Sets the default open panel(s)
  export let defaultActiveKey = "";
  // Accordion mode only allows one panel open at a time
  export let accordion = false;
  // Borderless version
  export let borderless = false;

  const activeKeyStore = writable([]);
  $: activeKeyStore.set(
    typeof defaultActiveKey === "object" ? defaultActiveKey : [defaultActiveKey]
  );
  setContext("activeKeyStore", activeKeyStore);

  const isAccordionStore = writable(false);
  $: isAccordionStore.set(!!accordion);
  setContext("isAccordionStore", isAccordionStore);

  // on:change event
  $: dispatch("change", $activeKeyStore);
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
