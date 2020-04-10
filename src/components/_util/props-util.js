export function isEmptyElement(c) {
  return !(c.tag || (c.text && c.text.trim() !== ""));
}
