<Button on:click="{showAll}">Show Modal</Button>

<script>
  import { Button, Modal } from "svant";
  import { ExclamationCircleOutlined } from "svant/icons";

  const { confirm } = Modal;

  function showAll() {
    for (let i = 0; i < 3; i += 1) {
      setTimeout(() => {
        confirm({
          icon: ExclamationCircleOutlined,
          content: "Clicking any button will close all three",
          onOk() {
            destroyAll();
          },
          onCancel() {
            destroyAll();
          }
        });
      }, i * 500);
    }
  }

  function destroyAll() {
    Modal.destroyAll();
  }
</script>
