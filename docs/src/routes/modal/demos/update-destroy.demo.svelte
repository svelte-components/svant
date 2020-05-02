<Button on:click="{countDown}">Open modal to close in 3s</Button>

<script>
  import { Button, Modal } from "svant";

  function countDown() {
    let secondsToGo = 3;
    const modal = Modal.success({
      title: "This is a notification message",
      content: `This modal will be destroyed after ${secondsToGo} second.`
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.$set({
        content: `This modal will be destroyed after ${secondsToGo} second.`
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }
</script>
