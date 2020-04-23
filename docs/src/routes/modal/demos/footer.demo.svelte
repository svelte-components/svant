<Button type="primary" on:click="{showModal}">
  Open Modal with customized footer
</Button>
<Modal {visible} title="Title" on:ok="{closeModal}" on:cancel="{closeModal}">
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>

  <span slot="footer">
    <Button on:click="{closeModal}">Return</Button>
    <Button type="primary" on:click="{closeModal}">Submit</Button>
  </span>
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
</script>
