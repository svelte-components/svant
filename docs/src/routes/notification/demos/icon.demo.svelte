<Button type="primary" on:click="{openNotification}">
  Open the notification box
</Button>

<script>
  import { notification, Button, message } from "svant";
  import { SmileOutlined } from "svant/icons";

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      icon: SmileOutlined,
      iconColor: "#108ee9"
    });
  };
</script>
