<Button type="primary" on:click="{showModal}">Open Modal</Button>
<Modal
  {visible}
  on:ok="{closeModal}"
  on:cancel="{closeModal}"
  afterClose="{onAfterClose}">
  <p>Some contents...</p>
</Modal>

<script>
  import { Modal, Button } from "svant";

  let visible = false;

  function showModal() {
    visible = true;
  }

  function closeModal() {
    visible = false;
  }

  function onAfterClose() {
    console.log("afterClose called");
  }
</script>
