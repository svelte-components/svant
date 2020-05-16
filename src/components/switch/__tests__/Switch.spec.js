import Switch from "../Switch.svelte";
import { render } from "@/components/_util/testHelpers";
import { tick } from "svelte";

describe("Switch component", () => {
  test("should render", () => {
    const { container } = render(Switch);
    expect(container.innerHTML).toContain("ant-switch");
  });

  test("should render with default value", () => {
    const { container } = render(Switch, { defaultChecked: true });
    expect(container.innerHTML).toContain("ant-switch");
    const button = container.getElementsByTagName("BUTTON")[0];
    expect(button.getAttribute("aria-checked")).toEqual("true");
  });
  test("should render disabled", () => {
    const { container } = render(Switch, { disabled: true });
    expect(container.innerHTML).toContain("ant-switch");
    const button = container.getElementsByTagName("BUTTON")[0];
    expect(button.disabled).toEqual(true);
  });
  test("should render loading", () => {
    const { container } = render(Switch, { loading: true });
    expect(container.innerHTML).toContain("ant-switch-loading-icon");
  });
  test("should render slots", async () => {
    const { component, container } = render(Switch, {
      checked: true,
      $$slots: {
        checked: document.createTextNode("ON"),
        unchecked: document.createTextNode("OFF")
      }
    });
    expect(container.innerHTML).toContain("ON");
    component.$set({ checked: false });
    await tick();
    expect(container.innerHTML).toContain("OFF");
  });
});
