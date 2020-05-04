<Button on:click="{startAction}">Display sequential messages</Button>

<script>
  import { Button, message } from "svant";

  const startAction = () => {
    message
      .loading({ content: "Action in progress..", duration: 1500 })
      .then(() =>
        message.success({ content: "Loading finished", duration: 1500 })
      )
      .then(() =>
        message.info({
          content: "Loading finished is finished",
          duration: 1500
        })
      );
  };
</script>
