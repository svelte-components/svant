<Button type="primary" on:click="{info}">Display message</Button>

<script>
  import { message, Button } from "svant";

  const info = () => {
    message.info("This is a basic message");
  };
</script>
