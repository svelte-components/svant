import Modal from "./Modal.svelte";
import { destroyAll } from "./store";

Modal.destroyAll = () => {
  destroyAll.set(true);
  // reset so it can be called again
  setTimeout(() => {
    destroyAll.set(false);
  }, 500);
};

const createModalFunction = modalType => options =>
  new Modal({
    target: document.body,
    props: {
      ...options,
      modalType,
      visible: true
    }
  });

Modal.confirm = createModalFunction("confirm");
Modal.info = createModalFunction("info");
Modal.success = createModalFunction("success");
Modal.error = createModalFunction("error");
Modal.warning = createModalFunction("warning");

export default Modal;
