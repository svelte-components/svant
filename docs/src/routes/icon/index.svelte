<svelte:head>
  <title>Icon</title>
</svelte:head>
<div class="markdown api-container">
  <Icons />
</div>

<script>
  import Icons from "./demo.md";
</script>

<style global>
  [id^="icon-demo-"] .anticon {
    margin-right: 6px;
    font-size: 24px;
  }

  [id^="icon-demo-"] .demo-code-collapse .anticon {
    margin-right: 0;
    font-size: 14px;
  }
</style>
