<svelte:head>
  <title>Notification</title>
</svelte:head>
<div class="markdown api-container">
  <Notification />
</div>

<script>
  import Notification from "./demo.md";
</script>

<style global>
  [id^="notification-demo-"] .ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
  }
</style>
