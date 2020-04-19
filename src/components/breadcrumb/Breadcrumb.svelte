<div class="ant-breadcrumb">
  <slot />
</div>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  // ********************** Props **********************

  // Sets the separator for all the BreadcrumbItem children. They can override this individually.
  export let separator = "/";

  // ********************** /Props **********************

  let uniformedSeparator = writable(separator);
  $: uniformedSeparator.set(separator);

  setContext("uniformedSeparator", uniformedSeparator);
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
