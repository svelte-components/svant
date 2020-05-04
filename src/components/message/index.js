import Message from "./Message.svelte";
import { get } from "svelte/store";
import messageStore from "./store";
import { nanoid } from "nanoid";

if (typeof document !== "undefined") {
  // Create the component if it doesn't exist
  if (!document.getElementById("svant-messages-wrapper")) {
    new Message({ target: document.body });
  }

  const createMessageFunction = type => options => {
    return new Promise(resolve => {
      let newMessageData = {
        id: options.key || nanoid(),
        type
      };

      const destroy = () => {
        messageStore.set(
          get(messageStore).filter(message => message.id !== newMessageData.id)
        );
      };

      if (options.duration !== 0) {
        // Need to store the timeout so we can cancel if the user updates it
        newMessageData.currentTimeout = setTimeout(() => {
          destroy();
          resolve(destroy);
        }, options.duration || 3000);
      }

      if (typeof options === "string") {
        newMessageData.content = options;
      } else {
        newMessageData = {
          ...newMessageData,
          ...options
        };
      }

      // If the user passes the same key they want to update the message
      let existingMessage =
        options.key &&
        get(messageStore).find(message => message.id === options.key);
      if (existingMessage) {
        let currentMessages = [...get(messageStore)];
        const index = currentMessages.map(m => m.id).indexOf(options.key);
        currentMessages[index] = newMessageData;
        if (options.duration || options.duration === 0) {
          // The user passed a duration with the update so clear the original timeout
          clearTimeout(existingMessage.currentTimeout);
        }
        messageStore.set(currentMessages);
      } else {
        messageStore.set([...get(messageStore), { ...newMessageData }]);
      }

      // We expose destroy so that the user can remove the message asynchronously
      if (options.duration === 0) resolve(destroy);
    });
  };

  Message.info = createMessageFunction("info");
  Message.success = createMessageFunction("success");
  Message.warning = createMessageFunction("warning");
  Message.error = createMessageFunction("error");
  Message.loading = createMessageFunction("loading");
}

export default Message;
