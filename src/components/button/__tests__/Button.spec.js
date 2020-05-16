import { render } from "@testing-library/svelte";
import { getByText, getAllByText } from "@testing-library/dom";
import flushPromises from "flush-promises";
import ButtonTypesDemo from "examples/button/demos/type.demo.svelte";
import ButtonIconDemo from "examples/button/demos/icons.demo.svelte";
import ButtonDisabledDemo from "examples/button/demos/disabled.demo.svelte";
import ButtonLoadingdDemo from "examples/button/demos/loading.demo.svelte";
import ButtonDangerDemo from "examples/button/demos/danger.demo.svelte";
import ButtonBlockDemo from "examples/button/demos/block.demo.svelte";
import { Button } from "@/components";
import { tick } from "svelte";

describe("Button component", () => {
  test("should render component types", () => {
    const { container } = render(ButtonTypesDemo);

    const buttons = container.querySelectorAll("button");
    const types = ["primary", "default", "dashed", "link"];

    buttons.forEach((button, index) => {
      expect(button).toHaveClass(`ant-btn-${types[index]}`);
    });
  });

  test("should render component icons", () => {
    const { container } = render(ButtonIconDemo);

    const button = container.querySelector("button");
    const icon = container.querySelector(".anticon-search svg");

    expect(button).toContainElement(icon);
  });

  test("should render component sizes", async () => {
    const { component, container } = render(Button, { size: "large" });
    expect(container.querySelector(".ant-btn-lg")).toBeTruthy();
    expect(container.querySelector(".ant-btn-sm")).toBeFalsy();

    component.$set({ size: "default" });
    await tick();

    expect(container.querySelector(".ant-btn-lg")).toBeFalsy();
    expect(container.querySelector(".ant-btn-sm")).toBeFalsy();

    component.$set({ size: "small" });
    await tick();

    expect(container.querySelector(".ant-btn-sm")).toBeTruthy();
    expect(container.querySelector(".ant-btn-lg")).toBeFalsy();
  });

  test("should render disabled", () => {
    const { container } = render(ButtonDisabledDemo);
    const button = getByText(container, "Primary(disabled)").parentNode; // The text in the button is inside a span
    expect(button.disabled).toBeTruthy();
  });

  test("should render loading state", async done => {
    const { container } = render(ButtonLoadingdDemo);
    const constantLoadingButton = getAllByText(container, "Loading")[0]
      .parentNode;
    expect(
      constantLoadingButton.querySelector(".anticon-loading svg.anticon-spin")
    ).toBeTruthy();

    // Test loader that appears after an action
    const clickMeButton = getAllByText(container, "Click me!")[0].parentNode;
    expect(
      clickMeButton.querySelector(".anticon-loading svg.anticon-spin")
    ).toBeFalsy();
    clickMeButton.click();
    await flushPromises();
    expect(
      clickMeButton.querySelector(".anticon-loading svg.anticon-spin")
    ).toBeTruthy();

    // Test loading with delay
    const delayedLoadingButton = getByText(container, "With 2s Delay")
      .parentNode;
    delayedLoadingButton.click();
    await flushPromises();
    expect(
      delayedLoadingButton.querySelector(".anticon-loading svg.anticon-spin")
    ).toBeFalsy();
    setTimeout(() => {
      expect(
        delayedLoadingButton.querySelector(".anticon-loading svg.anticon-spin")
      ).toBeTruthy();
      done();
    }, 2200); // A little extra time to avoid flakiness
  });

  test("should render in a danger state", () => {
    const { container } = render(ButtonDangerDemo);
    const button = getByText(container, "Primary").parentNode;
    expect(button).toHaveClass("ant-btn-dangerous");
  });

  test("should render in a block state", () => {
    const { container } = render(ButtonBlockDemo);
    const button = getByText(container, "Primary").parentNode;
    expect(button).toHaveClass("ant-btn-block");
  });
});
