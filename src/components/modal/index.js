import Modal from "./Modal.svelte";
import { modalDestroyFunctions } from "./store";
import { get } from "svelte/store";

Modal.destroyAll = () => {
  const destroyFunctions = get(modalDestroyFunctions);
  destroyFunctions.forEach(func => {
    func();
  });

  // Empty array so we can start over
  modalDestroyFunctions.set([]);
};

const createModalFunction = modalType => options => {
  const { onOk, onCancel } = options;
  delete options.onOk;
  delete options.onCancel;

  const modal = new Modal({
    target: document.body,
    props: {
      ...options,
      modalType,
      visible: true,
      closeable: options.closeable || false,
      maskClosable: options.maskClosable || false
    }
  });
  modal.$on("ok", () => {
    modal.$set({ visible: false });
    onOk && onOk();
  });
  modal.$on("cancel", () => {
    modal.$set({ visible: false });
    onCancel && onCancel();
  });
  return modal;
};

Modal.confirm = createModalFunction("confirm");
Modal.info = createModalFunction("info");
Modal.success = createModalFunction("success");
Modal.error = createModalFunction("error");
Modal.warning = createModalFunction("warning");

export default Modal;
