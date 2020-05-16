<Button on:click="{success}">Success</Button>
<Button on:click="{error}">Error</Button>
<Button on:click="{warning}">Warning</Button>

<script>
  import { Button, message } from "svant";

  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const warning = () => {
    message.warning("This is a warning message");
  };
</script>
