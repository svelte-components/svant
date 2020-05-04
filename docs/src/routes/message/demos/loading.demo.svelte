<Button on:click="{loading}">Display a loading indicator</Button>

<script>
  import { Button, message } from "svant";

  const loading = async () => {
    const hideMessage = await message.loading({
      content: "Action in progress..",
      duration: 0
    });

    setTimeout(hideMessage, 2500);
  };
</script>
