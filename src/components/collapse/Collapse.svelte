<div class="ant-collapse ant-collapse-icon-position-left">
  <slot />
</div>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const activeKeyStore = writable([]);

  // ********************** Props **********************

  // Sets the default open panel(s)
  export let defaultActiveKey = "";

  $: activeKeyStore.set(
    typeof defaultActiveKey === "object" ? defaultActiveKey : [defaultActiveKey]
  );
  setContext("activeKeyStore", activeKeyStore);
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
