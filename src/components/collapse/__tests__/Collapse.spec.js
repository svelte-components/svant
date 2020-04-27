import { render, fireEvent } from "@testing-library/svelte";
import CollapseBasic from "examples/collapse/demos/basic.demo.svelte";

describe("Collapse component", () => {
  test("basic functionality", async () => {
    const { container } = render(CollapseBasic);
    const panels = container.querySelectorAll(".ant-collapse-item");
    // First panel should be open
    expect(panels[0]).toHaveClass("ant-collapse-item-active");

    await fireEvent.click(panels[0]);
    // should be closed

    // last panel should be disabled
  });
});
