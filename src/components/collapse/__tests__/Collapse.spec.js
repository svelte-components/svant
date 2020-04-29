import { render, fireEvent } from "@testing-library/svelte";
import { delay } from "../../_util/testHelper.js";
import CollapseBasic from "examples/collapse/demos/basic.demo.svelte";
import CollapseAccordion from "examples/collapse/demos/accordion.demo.svelte";
import CollapseNested from "examples/collapse/demos/nested.demo.svelte";
import CollapseBorderless from "examples/collapse/demos/borderless.demo.svelte";
import CollapseCustom from "examples/collapse/demos/custom-panel.demo.svelte";
import CollapseHideArrow from "examples/collapse/demos/hide-arrow.demo.svelte";
import CollapseRightArrow from "examples/collapse/demos/right-arrow.demo.svelte";

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

  test("nested collapse", async () => {
    const { container } = render(CollapseNested);
    const firstPanel = container.querySelector(".ant-collapse-item");
    const firstPanelHeader = firstPanel.querySelector(".ant-collapse-header");
    const nestedPanel = firstPanel.querySelector(".ant-collapse-item");
    const nestedPanelHeader = nestedPanel.querySelector(".ant-collapse-header");

    await fireEvent.click(firstPanelHeader);
    await fireEvent.click(nestedPanelHeader);

    // should have a functional nested collapse
    expect(nestedPanel).toHaveClass("ant-collapse-item-active");

    // close the parent collapse and make sure the nested one stays open
    await fireEvent.click(firstPanelHeader);
    expect(nestedPanel).toHaveClass("ant-collapse-item-active");
  });

  test("borderless", () => {
    const { container } = render(CollapseBorderless);
    expect(container.querySelector(".ant-collapse-borderless")).toBeTruthy();
  });

  test("custom expand icon", () => {
    const { container } = render(CollapseCustom);
    expect(container.querySelector(".anticon-caret-right")).toBeTruthy();
  });

  test("custom className", async () => {
    const { container } = render(CollapseCustom);
    // should pass the classname down to the both the collapse and the panel components
    expect(
      container.querySelector(".site-collapse-custom-collapse")
    ).toBeTruthy();
    expect(container.querySelector(".site-collapse-custom-panel")).toBeTruthy();
  });

  test("hide panel arrow", () => {
    const { container } = render(CollapseHideArrow);
    // Arrow is hidden on the second of the two panels
    expect(container.querySelectorAll(".ant-collapse-arrow").length).toEqual(1);
  });

  test("arrow icon position", () => {
    const { container } = render(CollapseRightArrow);
    expect(
      container.querySelector(".ant-collapse-icon-position-right")
    ).toBeTruthy();
  });

  test("manual active key", () => {});
});
