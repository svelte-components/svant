<svelte:head>
  <title>Button</title>
</svelte:head>
<div class="markdown api-container">
  <Buttons />
</div>

<script>
  import Buttons from "./demo.md";
</script>

<style global>
  [id^="button-demo-"] .ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
  }
</style>
