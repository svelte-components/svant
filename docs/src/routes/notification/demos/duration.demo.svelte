<Button type="primary" on:click="{openTimed}">Will close in 1.5s</Button>
<Button type="primary" on:click="{openInfinite}">Never closing message</Button>

<script>
  import { Button, notification } from "svant";

  const openTimed = () => {
    notification.open({
      message: "Notification Title",
      description: "This is a notification that will disappear in 1.5 seconds",
      duration: 1500
    });
  };

  const openInfinite = () => {
    notification.open({
      message: "Notification Title",
      description: "This is a notification that will never close on it's own",
      duration: 0
    });
  };
</script>
