import Modal from "./Modal.svelte";

export default {
  confirm: options => {
    return new Modal({
      target: document.body,
      props: {
        ...options,
        modalType: "confirm",
        visible: true
      }
    });
  }
};
