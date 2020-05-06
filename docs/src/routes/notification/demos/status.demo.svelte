<Button on:click="{onSuccess}">Success</Button>
<Button on:click="{onInfo}">Info</Button>
<Button on:click="{onWarning}">Warning</Button>
<Button on:click="{onError}">Error</Button>

<script>
  import { Button, notification } from "svant";

  const defaultOptions = {
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  };

  function onSuccess() {
    notification.success(defaultOptions);
  }

  function onInfo() {
    notification.info(defaultOptions);
  }

  function onWarning() {
    notification.warning(defaultOptions);
  }

  function onError() {
    notification.error(defaultOptions);
  }
</script>
