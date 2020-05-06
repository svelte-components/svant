<Button type="primary" on:click="{openNotification}">
  Open the notification box
</Button>

<script>
  import { notification, Button, message } from "svant";

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description: "This is the content of the notification."
    });
  };
</script>
