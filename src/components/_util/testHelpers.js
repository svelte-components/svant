import { detach, insert, noop, set_current_component } from "svelte/internal";
import { render as defaultRender } from "@testing-library/svelte";
import { fireEvent } from "@testing-library/svelte";

export const delay = (amount = 200) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, amount);
  });
};

function rootSlotFn(elements) {
  return () => {
    return {
      c: noop,
      m(target, anchor) {
        elements.forEach(el => {
          if (el && el.component) {
            let results = render(el.component, el.options, {
              container: target
            });
            if (el.renderResults) {
              el.renderResults(results);
            }
          } else {
            insert(target, el, anchor);
          }
        });
      },
      d() {
        elements.forEach(el => {
          if (el && !el.component) {
            detach(el);
          }
        });
      },
      l: noop
    };
  };
}

function createSlots(slots) {
  const root_slots = {};
  for (const slot_name in slots) {
    let elements = slots[slot_name];
    if (!Array.isArray(elements)) {
      elements = [elements];
    }
    root_slots[slot_name] = [rootSlotFn(elements)];
  }
  return root_slots;
}

// this is how we set the current component, it looks like the context is retrieved from it,
// check https://github.com/sveltejs/svelte/blob/8f83e8ad2d2632d47ecc97ef1014cfbb307362be/src/runtime/internal/Component.ts#L100-L120
function setContextValues(context) {
  const contextMap = new Map();
  Object.keys(context).forEach(key => contextMap.set(key, context[key]));

  set_current_component({
    $$: { context: contextMap }
  });
}
export function clearContext() {
  set_current_component(null);
}

export function render(Component, options = {}, renderOptions) {
  if (options.$$slots) {
    options.$$slots = createSlots(options.$$slots);
    options.$$scope = options.$$scope || {};
  }
  if (options.$$context) {
    setContextValues(options.$$context);
    delete options.$$context;
  }
  return defaultRender(Component, options, renderOptions);
}

// Should be called using await
export function pressKey({ key, which }) {
  return fireEvent.keyDown(document.body, {
    key,
    which,
    keyCode: which
  });
}
