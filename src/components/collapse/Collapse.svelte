<div
  class="ant-collapse {className}
  {iconPositonClassName}"
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
  // Manually override the keys for more control of what opens and when
  export let activeKey = null;
  // Accordion mode only allows one panel open at a time
  export let accordion = false;
  // Borderless version
  export let borderless = false;
  // Custom expand icon
  export let expandIcon = RightOutlined;
  // Custom class for the Collapse wrapper
  export let className = "";
  // Icon position can be left or right
  export let expandIconPosition = "left";

  // ********************** /Props **********************

  // Class name for the icon positon - set below
  let iconPositonClassName = "";

  const collapseStore = writable({
    activeKey: [],
    isAccordion: false,
    expandIcon,
    usingCustomActiveKey: false
  });
  $: collapseStore.set({
    activeKey:
      activeKey ||
      (typeof defaultActiveKey === "object"
        ? defaultActiveKey
        : [defaultActiveKey]),
    isAccordion: !!accordion,
    expandIcon,
    usingCustomActiveKey: activeKey
  });
  setContext("collapseStore", collapseStore);

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

  $: if (expandIconPosition) {
    const baseClassString = "ant-collapse-icon-position-";
    const leftClass = baseClassString + "left";
    const rightClass = baseClassString + "right";
    if (!["right", "left"].includes(expandIconPosition)) {
      console.warn(
        `Unsupported value '${expandIconPosition}' used for the expandIconPosition prop on the Collapse component. Valid values are 'right' or 'left'`
      );
    }
    // Default is left
    iconPositonClassName =
      expandIconPosition === "right" ? rightClass : leftClass;
  }
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
