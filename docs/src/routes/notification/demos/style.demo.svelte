<Button type="primary" on:click="{openNotification}">
  Open styled notification box
</Button>

<script>
  import { notification, Button, message } from "svant";

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      style: {
        marginLeft: 335 - 600
      },
      className: "test-notification-demo-class"
    });
  };
</script>

<style>
  :global("test-notification-demo-class") {
    width: 600px;
  }
</style>
