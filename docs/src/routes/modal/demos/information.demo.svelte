<div class="information-buttons">
  <Button on:click="{info}">Info</Button>
  <Button on:click="{success}">Success</Button>
  <Button on:click="{error}">Error</Button>
  <Button on:click="{warning}">Warning</Button>
</div>

<script>
  import { Button, Modal } from "svant";
  import ModalInfoContent from "./ModalInfoExample.svelte";

  function info() {
    Modal.info({
      title: "This is a notification message",
      content: ModalInfoContent,
      onOk() {}
    });
  }

  function success() {
    Modal.success({
      content: "some messages...some messages..."
    });
  }

  function error() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages..."
    });
  }

  function warning() {
    Modal.warning({
      title: "This is a warning message",
      content: "some messages...some messages..."
    });
  }
</script>
