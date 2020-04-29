<div
  class="ant-collapse {className} ant-collapse-icon-position-left"
  class:ant-collapse-borderless="{borderless}">
  <slot />
</div>

<script>
  import { setContext, createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import { RightOutlined } from "@/components/icons";

  const dispatch = createEventDispatcher();

  // ********************** Props **********************

  // Sets the default open panel(s)
  export let defaultActiveKey = "";
  // Accordion mode only allows one panel open at a time
  export let accordion = false;
  // Borderless version
  export let borderless = false;
  // Custom expand icon
  export let expandIcon = RightOutlined;
  // Custom class for the Collapse wrapper
  export let className = "";

  const collapseStore = writable({
    activeKey: [],
    isAccordion: false,
    expandIcon
  });
  $: collapseStore.set({
    activeKey:
      typeof defaultActiveKey === "object"
        ? defaultActiveKey
        : [defaultActiveKey],
    isAccordion: !!accordion,
    expandIcon
  });
  setContext("collapseStore", collapseStore);

  // on:change event
  $: dispatch("change", $collapseStore.activeKey);
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
