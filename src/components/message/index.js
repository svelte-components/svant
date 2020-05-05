import Message from "./Message.svelte";
import { get } from "svelte/store";
import messageStore from "./store";
import { nanoid } from "nanoid";

if (typeof document !== "undefined") {
  if (!document.getElementById("svant-messages-wrapper")) {
    // Create the component if it doesn't exist
    new Message({ target: document.body });
  }

  const createMessageFunction = type => options => {
    return new Promise(resolve => {
      let newMessageData = {
        id: options.key || nanoid(),
        type
      };

      const destroy = () => {
        messageStore.set({
          config: get(messageStore).config,
          messages: get(messageStore).messages.filter(
            message => message.id !== newMessageData.id
          )
        });
      };

      if (options.duration !== 0) {
        // Need to store the timeout so we can cancel if the user updates it
        newMessageData.currentTimeout = setTimeout(() => {
          destroy();
          resolve(destroy);
        }, options.duration || get(messageStore).config.duration || 3000);
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
        get(messageStore).messages.find(message => message.id === options.key);
      if (existingMessage) {
        let currentMessages = [...get(messageStore).messages];
        const index = currentMessages.map(m => m.id).indexOf(options.key);
        currentMessages[index] = newMessageData;
        if (options.duration || options.duration === 0) {
          // The user passed a duration with the update so clear the original timeout
          clearTimeout(existingMessage.currentTimeout);
        }
        messageStore.set({
          config: get(messageStore).config,
          messages: currentMessages
        });
      } else {
        messageStore.set({
          config: get(messageStore).config,
          messages: [...get(messageStore).messages, { ...newMessageData }]
        });
      }

      const { maxCount } = get(messageStore).config;
      if (maxCount && get(messageStore).messages.length > maxCount) {
        const messagesCopy = [...get(messageStore).messages];
        messagesCopy.splice(0, 1);
        messageStore.set({
          config: get(messageStore).config,
          messages: [...messagesCopy]
        });
      }

      // We expose destroy so that the user can remove the message asynchronously
      if (options.duration === 0) resolve(destroy);
    });
  };

  Message.info = createMessageFunction("info");
  Message.success = createMessageFunction("success");
  Message.warning = createMessageFunction("warning");
  Message.warn = createMessageFunction("warning");
  Message.error = createMessageFunction("error");
  Message.loading = createMessageFunction("loading");
  Message.config = config => {
    messageStore.set({
      config,
      messages: get(messageStore).messages
    });
  };
}

export default Message;
