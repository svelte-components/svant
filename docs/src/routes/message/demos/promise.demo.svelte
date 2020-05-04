<Button on:click="{startAction}">Display sequential messages</Button>

<script>
  import { Button, message } from "svant";
  import { FireFilled } from "svant/icons";

  const startAction = () => {
    message
      .loading({ content: "Action in progress..", duration: 1500 })
      .then(() =>
        message.success({ content: "Loading finished", duration: 800 })
      )
      .then(() =>
        message.error({
          // we want the icon to be red
          content: "Loading finished is finished",
          duration: 1500,
          icon: FireFilled
        })
      );
  };
</script>
