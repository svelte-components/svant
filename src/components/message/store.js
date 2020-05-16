import { writable } from "svelte/store";
// Stores an array of message objects
export default writable({
  config: {},
  messages: []
});
