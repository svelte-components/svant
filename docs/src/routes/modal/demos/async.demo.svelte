<Button type="primary" on:click="{showModal}">
  Open Modal with async logic
</Button>
<Modal
  title="Title"
  {visible}
  on:ok="{handleOk}"
  {confirmLoading}
  on:cancel="{handleCancel}">
  <p>{ModalText}</p>
</Modal>

<script>
  import { Modal, Button } from "svant";

  let visible = false;
  let ModalText = "Content of the modal";
  let confirmLoading = false;

  function showModal() {
    visible = true;
  }

  function handleOk() {
    ModalText = "The modal will be closed after two seconds";
    confirmLoading = true;

    setTimeout(() => {
      visible = false;
      confirmLoading = false;
      ModalText = "Content of the modal";
    }, 2000);
  }

  function handleCancel() {
    console.log("Cancel button pressed");
    visible = false;
  }
</script>
