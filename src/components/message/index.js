import Message from "./Message.svelte";
import { get } from "svelte/store";
import messageStore from "./store";
import { nanoid } from "nanoid";

if (typeof document !== "undefined") {
  if (!document.getElementById("svant-messages-wrapper")) {
    new Message({ target: document.body });
  }

  // TODO needs to be message.[whatever](stringContent, duration, )
  const createMessageFunction = type => options => {
    const newMessageData = {
      id: nanoid(),
      type
    };

    if (typeof options === "string") {
      newMessageData.content = options;
    } else {
      newMessageData = {
        ...newMessageData,
        ...options
      };
    }
    messageStore.set([...get(messageStore), { ...newMessageData }]);
  };

  Message.info = createMessageFunction("info");
}

export default Message;
