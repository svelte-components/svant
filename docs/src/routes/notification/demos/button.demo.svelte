<Button type="primary" on:click="{openNotification}">
  Open the notification box
</Button>

<script>
  import { notification, Button, message } from "svant";

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      key: "custom_key",
      onClose: () => {
        message.info("Notification closed");
      },
      button: {
        type: "primary",
        size: "small",
        text: "Confirm",
        onClick: () => {
          message.info("Close button clicked!");
          notification.close("custom_key");
        }
      }
    });
  };
</script>
