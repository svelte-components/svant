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
