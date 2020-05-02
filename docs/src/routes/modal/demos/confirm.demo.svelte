<Button on:click="{showConfirm}">Confirm</Button>
<Button on:click="{showDeleteConfirm}" type="dashed">Delete</Button>
<Button on:click="{showPropsConfirm}" type="dashed">With extra props</Button>
<Button on:click="{showPromiseConfirm}">Confirm with Promise</Button>

<script>
  import { Button, Modal } from "svant";
  import { ExclamationCircleOutlined } from "svant/icons";

  const { confirm } = Modal;

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

  function showPromiseConfirm() {
    confirm({
      title: "Do you want to delete these items?",
      icon: ExclamationCircleOutlined,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {}
    });
  }
</script>
