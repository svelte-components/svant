<div class="ant-breadcrumb">
  <slot />
</div>

<script>
  import { setContext } from "svelte";

  // ********************** Props **********************

  // Sets the separator for all the BreadcrumbItem children. They can override this individually.
  export let separator = "/";

  setContext("uniformedSeparator", separator);
</script>

<style lang="less" global>
  @import "style/index.less";
</style>
