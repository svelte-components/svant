import { render, fireEvent } from "@testing-library/svelte";
import { delay } from "../../_util/testHelper.js";
import CollapseBasic from "examples/collapse/demos/basic.demo.svelte";
import CollapseAccordion from "examples/collapse/demos/accordion.demo.svelte";

describe("Collapse component", () => {
  const originalConsole = { ...console };
  let mockConsoleLog;

  beforeEach(() => {
    mockConsoleLog = jest.fn();
    console = {
      ...originalConsole,
      log: mockConsoleLog
    };
  });

  afterAll(() => {
    console = originalConsole;
  });

  test("basic functionality", async () => {
    const { container } = render(CollapseBasic);
    const panels = container.querySelectorAll(".ant-collapse-item");
    // First panel should be open
    expect(panels[0]).toHaveClass("ant-collapse-item-active");

    await fireEvent.click(panels[0].querySelector(".ant-collapse-header"));
    expect(panels[0]).not.toHaveClass("ant-collapse-item-active");

    await fireEvent.click(panels[1].querySelector(".ant-collapse-header"));
    expect(panels[1]).toHaveClass("ant-collapse-item-active");

    expect(panels[2]).toHaveClass("ant-collapse-item-disabled");
    await fireEvent.click(panels[2].querySelector(".ant-collapse-header"));
    expect(panels[2]).not.toHaveClass("ant-collapse-item-active");
  });

  test("change event", async () => {
    const { container } = render(CollapseBasic);
    const secondPanelHeader = container.querySelectorAll(
      ".ant-collapse-item .ant-collapse-header"
    )[1];
    await fireEvent.click(secondPanelHeader);
    expect(console.log).toBeCalledWith(["1", "2"]);
  });

  test("accordion", async () => {
    const { container } = render(CollapseAccordion);
    const panelHeaders = container.querySelectorAll(
      ".ant-collapse-item .ant-collapse-header"
    );
    await fireEvent.click(panelHeaders[0]);
    await fireEvent.click(panelHeaders[1]);
    // only one should be open
    expect(
      container.querySelectorAll(".ant-collapse-item-active")
    ).toHaveLength(1);
  });
});
