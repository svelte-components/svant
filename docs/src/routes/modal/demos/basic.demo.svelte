<div>
  <Button type="primary" on:click="{showModal}">Open Modal</Button>
  <Modal
    title="Basic Modal"
    {visible}
    on:ok="{closeModal}"
    on:cancel="{closeModal}">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</div>

<script>
  import { Modal, Button } from "svant";

  let visible = false;

  function showModal() {
    visible = true;
  }

  function closeModal() {
    visible = false;
  }
</script>
