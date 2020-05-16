<Button type="primary" on:click="{openMessage}">Open the message box</Button>

<script>
  import { Button, message } from "svant";

  const key = "updatable";

  const openMessage = () => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      message.success({ content: "Loaded!", key, duration: 1000 });
    }, 1000);
  };
</script>
