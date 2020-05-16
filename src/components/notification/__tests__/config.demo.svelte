<Button type="primary" on:click="{openNotification}">
  Open the notification box
</Button>

<script>
  import { notification, Button } from "svant";

  notification.config({
    placement: "bottomRight",
    bottom: 50,
    duration: 1000,
    rtl: true
  });

  const openNotification = () => {
    notification.open({
      message: "Bottom Notification",
      description: "This is the content of the notification."
    });
  };
</script>
