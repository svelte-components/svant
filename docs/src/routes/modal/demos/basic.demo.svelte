<Button type="primary" on:click="{showModal}">Open Modal</Button>
<Modal
  title="Basic Modal"
  {visible}
  on:ok="{openAnother}"
  on:cancel="{closeModal}">
  <p>Some contents...</p>
  <p>Some contents...</p>
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

  function openAnother() {
    Modal.confirm({
      content: "Are you sure?",
      onOk: () => {
        closeModal();
      }
    });
  }
</script>
