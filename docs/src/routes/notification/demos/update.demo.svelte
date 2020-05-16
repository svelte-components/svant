<Button type="primary" on:click="{openNotification}">
  Open the notification box
</Button>

<script>
  import { notification, Button } from "svant";

  const key = "updatable";

  const openNotification = () => {
    notification.error({
      key,
      message: "Original Notification Title",
      description: "description."
    });
    setTimeout(() => {
      notification.success({
        key,
        message: "New Title",
        description: "New description.",
        duration: 3000
      });
    }, 1000);
  };
</script>
