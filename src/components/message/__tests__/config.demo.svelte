<Button type="primary" on:click="{info}">Display message</Button>

<script>
  import { message, Button } from "svant";
  import { onMount } from "svelte";

  onMount(() => {
    message.config({
      top: 100,
      duration: 1000,
      maxCount: 3,
      rtl: true
    });
  });

  const info = () => {
    message.info("This is a message with some global config");
  };
</script>
