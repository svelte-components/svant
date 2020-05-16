<Button on:click="{success}">Customized display duration</Button>
<Button on:click="{infinite}">Open never closing message</Button>

<script>
  import { Button, message } from "svant";

  const success = () => {
    message.success({
      content:
        "This is a prompt message for success, and it will disappear in 1 second",
      duration: 1000
    });
  };

  const infinite = () => {
    message.info({
      content: "This is a prompt that will never close",
      duration: 0
    });
  };
</script>
