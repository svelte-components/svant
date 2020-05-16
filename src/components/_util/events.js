export function onClickOutside(element, callback) {
  const handler = event => {
    if (event.target !== element && !element.contains(event.target)) {
      callback();
    }
  };

  document.body.addEventListener("mouseup", handler);
  document.body.addEventListener("touchend", handler);

  // Unbind function
  return () => {
    document.body.removeEventListener("mouseup", handler);
    document.body.removeEventListener("touchend", handler);
  };
}

const createKeydownEvent = key => {
  return function(callback) {
    const handler = event => {
      if (event.key === key) {
        callback(event);
      }
    };
    document.addEventListener("keydown", handler);
    // Unbind function
    return () => {
      document.removeEventListener("keydown", handler);
    };
  };
};

export const onEnter = createKeydownEvent("Enter");
export const onEscape = createKeydownEvent("Escape");
export const onBackspace = createKeydownEvent("Backspace");
export const onArrowUp = createKeydownEvent("ArrowUp");
export const onArrowDown = createKeydownEvent("ArrowDown");
