import { clearContext, render } from "@/components/_util/testHelpers";
import Radio from "../Radio.svelte";
import { writable } from "svelte/store";
import { fireEvent } from "@testing-library/dom";

describe("Radio component", () => {
  afterEach(() => {
    clearContext();
  });
  test("should render default", () => {
    const { container } = render(Radio);
    expect(container.innerHTML).toContain("ant-radio");
  });

  test("should render with default state", () => {
    const { container } = render(Radio, { defaultChecked: true });

    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.checked).toEqual(true);
  });

  test("should render with checked defined", () => {
    const { container } = render(Radio, { checked: true });

    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.checked).toEqual(true);
  });

  test("should render with disabled state", () => {
    const { container } = render(Radio, { disabled: true });
    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.disabled).toEqual(true);
  });

  test("should trigger change event if change happens", () => {
    const { container, component } = render(Radio);
    const onChange = jest.fn();
    component.$on("change", onChange);
    const input = container.getElementsByTagName("INPUT")[0];
    input.checked = true;
    fireEvent.change(input);
    expect(onChange).toHaveBeenCalled();
  });

  test("should trigger mouseenter when over the label", () => {
    const { container, component } = render(Radio);
    const onMouseOver = jest.fn();
    component.$on("mouseenter", onMouseOver);
    const label = container.getElementsByTagName("LABEL")[0];
    fireEvent.mouseEnter(label);
    expect(onMouseOver).toHaveBeenCalled();
  });
  test("should trigger mouseleave when over the label", () => {
    const { container, component } = render(Radio);
    const onMouseLeave = jest.fn();
    component.$on("mouseleave", onMouseLeave);
    const label = container.getElementsByTagName("LABEL")[0];
    fireEvent.mouseLeave(label);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  test("should not render span of children without slots", () => {
    const { container } = render(Radio);
    expect(
      container.getElementsByClassName("ant-radio-wrapper")[0].children.length
    ).toEqual(1);
  });

  test("should render span of children with slots", () => {
    let node = document.createTextNode("Radio Text");
    const { container } = render(Radio, {
      indeterminate: true,
      $$slots: { default: node }
    });
    expect(
      container.getElementsByClassName("ant-radio-wrapper")[0].children.length
    ).toEqual(2);
    expect(container.innerHTML).toContain("Radio Text");
  });

  test("should consider context if exiting", () => {
    const mockGroupContext = {
      radioButtonGroup: false,
      value: [],
      disabled: false,
      name: "test",
      setValue: jest.fn()
    };

    const { container } = render(Radio, {
      value: "test",
      $$context: {
        radioGroupStore: writable(mockGroupContext)
      }
    });
    const input = container.getElementsByTagName("INPUT")[0];
    input.checked = true;
    fireEvent.change(input);
    expect(mockGroupContext.setValue).toHaveBeenCalledWith("test");
  });

  test("should render with disabled state if the group is disabled", () => {
    const mockGroupContext = {
      radioButtonGroup: false,
      value: [],
      disabled: true,
      name: "test",
      setValue: jest.fn()
    };

    const { container } = render(Radio, {
      disabled: true,
      $$context: {
        checkBoxGroupStore: writable(mockGroupContext)
      }
    });
    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.disabled).toEqual(true);
  });
});
