import Notification from "./Notification.svelte";
import { get } from "svelte/store";
import notificationStore from "./store";
import { nanoid } from "nanoid";

if (typeof document !== "undefined") {
  if (!document.getElementById("svant-notification-wrapper")) {
    // Create the component if it doesn't exist
    new Notification({ target: document.body });
  }
}

const close = id => {
  const thisNotification = get(notificationStore).notifications.find(
    n => n.id === id
  );
  const onClose = thisNotification && thisNotification.onClose;
  notificationStore.set({
    config: get(notificationStore).config,
    notifications: get(notificationStore).notifications.filter(
      notification => notification.id !== id
    )
  });
  onClose && onClose();
};

const createNotificationsFunction = type => options => {
  let newNotificationData = {
    id: options.key || nanoid(),
    type
  };

  newNotificationData.close = () => {
    close(newNotificationData.id);
  };

  if (options.duration !== 0) {
    // Need to store the timeout so we can cancel if the user updates it
    newNotificationData.currentTimeout = setTimeout(() => {
      close(newNotificationData.id);
    }, options.duration || get(notificationStore).config.duration || 4500);
  }

  newNotificationData = {
    ...newNotificationData,
    ...options
  };

  // If the user passes the same key they want to update the notification
  let existingNotification =
    options.key &&
    get(notificationStore).notifications.find(
      notification => notification.id === options.key
    );
  if (existingNotification) {
    let currentNotifications = [...get(notificationStore).notifications];
    const index = currentNotifications.map(m => m.id).indexOf(options.key);
    currentNotifications[index] = newNotificationData;
    if (options.duration || options.duration === 0) {
      // The user passed a duration with the update so clear the original timeout
      clearTimeout(existingNotification.currentTimeout);
    }
    notificationStore.set({
      config: get(notificationStore).config,
      notifications: currentNotifications
    });
  } else {
    notificationStore.set({
      config: get(notificationStore).config,
      notifications: [
        ...get(notificationStore).notifications,
        { ...newNotificationData }
      ]
    });
  }
};

Notification.open = createNotificationsFunction("default");
Notification.success = createNotificationsFunction("success");
Notification.info = createNotificationsFunction("info");
Notification.warning = createNotificationsFunction("warning");
Notification.error = createNotificationsFunction("error");
Notification.close = close;

Notification.destroyAll = () => {
  notificationStore.set({
    config: get(notificationStore).config,
    notifications: []
  });
};

Notification.config = config => {
  notificationStore.set({
    config,
    notifications: get(notificationStore).notifications
  });
};

export default Notification;
