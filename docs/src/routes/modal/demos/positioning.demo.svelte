<Button type="primary" on:click="{() => setModal1Visible(true)}">
  Open 20px from the top
</Button>

<Button type="primary" on:click="{() => setModal2Visible(true)}">
  Vertically centered
</Button>

<Modal
  title="Top right corner"
  verticalPosition="{{ top: '20px' }}"
  visible="{modal1Visible}"
  on:ok="{() => setModal1Visible(false)}"
  on:cancel="{() => setModal1Visible(false)}">
  <p>some contents...</p>
  <p>some contents...</p>
  <p>some contents...</p>
</Modal>

<Modal
  title="Vertically centered modal dialog"
  centered
  visible="{modal2Visible}"
  on:ok="{() => setModal2Visible(false)}"
  on:cancel="{() => setModal2Visible(false)}">
  <p>some contents...</p>
  <p>some contents...</p>
  <p>some contents...</p>
</Modal>

<script>
  import { Button, Modal } from "svant";

  export let modal1Visible = false;
  export let modal2Visible = false;

  function setModal1Visible(visible) {
    modal1Visible = visible;
  }

  function setModal2Visible(visible) {
    modal2Visible = visible;
  }
</script>
