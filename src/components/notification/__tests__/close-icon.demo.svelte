<Button type="primary" on:click="{openNotification}">Open</Button>

<script>
  import { notification, Button } from "svant";
  import { CloseSquareOutlined } from "svant/icons";

  const openNotification = placement => {
    notification.info({
      message: `Notification`,
      description: "This is the content of the notification",
      closeIcon: CloseSquareOutlined
    });
  };
</script>
