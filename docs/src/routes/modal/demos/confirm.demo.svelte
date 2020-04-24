<Button on:click="{showConfirm}">Confirm</Button>
<Button on:click="{showDeleteConfirm}" type="dashed">Delete</Button>
<Button on:click="{showPropsConfirm}" type="dashed">With extra props</Button>

<script>
  import { Button, ModalHelper } from "svant";
  import { ExclamationCircleOutlined } from "svant/icons";

  const { confirm } = ModalHelper;

  function showConfirm() {
    confirm({
      title: "Do you want to delete these items?",
      icon: ExclamationCircleOutlined,
      content: "Some descriptions",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      icon: ExclamationCircleOutlined,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  function showPropsConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      icon: ExclamationCircleOutlined,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      okButtonProps: {
        disabled: true
      },
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }
</script>
