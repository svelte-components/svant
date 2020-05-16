import Message from "./Message.svelte";
import { get } from "svelte/store";
import messageStore from "./store";
import { nanoid } from "nanoid";

if (
  typeof document !== "undefined" &&
  !document.getElementById("svant-messages-wrapper")
) {
  // Create the component if it doesn't exist
  new Message({ target: document.body });
}

const createMessageFunction = type => options => {
  return new Promise(resolve => {
    let newMessage = {
      id: options.key || nanoid(),
      type
    };

    // Removes the message
    const destroy = () => {
      messageStore.set({
        config: get(messageStore).config,
        messages: get(messageStore).messages.filter(
          message => message.id !== newMessage.id
        )
      });
    };

    // If duration is set to 0 the user does not want it to automatically close
    if (options.duration !== 0) {
      // Destroy the message after the appropriate amount of time
      // Need to store the timeout so we can cancel if the user updates it
      newMessage.currentTimeout = setTimeout(() => {
        destroy();
        resolve(destroy);
      }, options.duration || get(messageStore).config.duration || 3000);
    }

    // If the user only passes a string, that should be the content
    // Otherwise pass all the inputted options to the new message
    if (typeof options === "string") {
      newMessage.content = options;
    } else {
      newMessage = {
        ...newMessage,
        ...options
      };
    }

    // If the user passes the same key they want to update the message
    let existingMessage =
      options.key &&
      get(messageStore).messages.find(message => message.id === options.key);
    // If the message exists we replace it
    // Otherwise add the message to the stored messages
    if (existingMessage) {
      let currentMessages = [...get(messageStore).messages];
      const index = currentMessages.map(m => m.id).indexOf(options.key);
      currentMessages[index] = newMessage;
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
        messages: [...get(messageStore).messages, { ...newMessage }]
      });
    }

    // If this message will exceed the configured maximum, remove the oldest message
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

export default Message;
