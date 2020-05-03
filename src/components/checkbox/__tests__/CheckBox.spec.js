import CheckBox from "../CheckBox.svelte";
import { writable } from "svelte/store";
import { clearContext, render } from "@/components/_util/testHelpers";

describe("CheckBox component", () => {
  afterEach(() => {
    clearContext();
  });
  test("should render default", () => {
    const { container } = render(CheckBox);
    expect(container.innerHTML).toContain("ant-checkbox");
  });
  test("should render with default state", () => {
    const { container } = render(CheckBox, { defaultChecked: true });

    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.checked).toEqual(true);
  });

  test("should render with checked defined", () => {
    const { container } = render(CheckBox, { checked: true });

    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.checked).toEqual(true);
  });

  test("should render with checked defined", () => {
    const { container } = render(CheckBox, { checked: true });

    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.checked).toEqual(true);
  });

  test("should render with indeterminate state", () => {
    const { container } = render(CheckBox, { indeterminate: true });
    expect(container.innerHTML).toContain("ant-checkbox-indeterminate");
  });

  test("should render with disabled state", () => {
    const { container } = render(CheckBox, { disabled: true });
    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.disabled).toEqual(true);
  });

  test("should trigger change event if change happens", () => {
    const { container, component } = render(CheckBox);
    const onChange = jest.fn();
    component.$on("change", onChange);
    const input = container.getElementsByTagName("INPUT")[0];
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    input.checked = true;
    input.dispatchEvent(evt);
    expect(onChange).toHaveBeenCalled();
  });
  test("should trigger mouseenter when over the label", () => {
    const { container, component } = render(CheckBox);
    const onMouseOver = jest.fn();
    component.$on("mouseenter", onMouseOver);
    const label = container.getElementsByTagName("LABEL")[0];
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("mouseenter", false, true);
    label.dispatchEvent(evt);
    expect(onMouseOver).toHaveBeenCalled();
  });
  test("should trigger mouseleave when over the label", () => {
    const { container, component } = render(CheckBox);
    const onMouseOver = jest.fn();
    component.$on("mouseleave", onMouseOver);
    const label = container.getElementsByTagName("LABEL")[0];
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("mouseleave", false, true);
    label.dispatchEvent(evt);
    expect(onMouseOver).toHaveBeenCalled();
  });
  test("should not render span of children without slots", () => {
    const { container } = render(CheckBox, { indeterminate: true });
    expect(
      container.getElementsByClassName("ant-checkbox-wrapper")[0].children
        .length
    ).toEqual(1);
  });

  test("should render span of children with slots", () => {
    let node = document.createTextNode("CheckBox Text");
    const { container } = render(CheckBox, {
      indeterminate: true,
      $$slots: { default: node }
    });
    expect(
      container.getElementsByClassName("ant-checkbox-wrapper")[0].children
        .length
    ).toEqual(2);
    expect(container.innerHTML).toContain("CheckBox Text");
  });

  test("should consider context if exiting", () => {
    const mockGroupContext = {
      toggleOption: jest.fn(),
      value: [],
      disabled: false,
      name: "test",
      registerValue: jest.fn(),
      cancelValue: jest.fn()
    };

    render(CheckBox, {
      value: "test",
      $$context: {
        groupContext: writable(mockGroupContext)
      }
    });
    expect(mockGroupContext.registerValue).toHaveBeenCalledWith("test");
  });

  test("should set itself to checked if the group context contains value", () => {
    const mockGroupContext = {
      toggleOption: jest.fn(),
      value: ["test"],
      disabled: false,
      name: "test",
      registerValue: jest.fn(),
      cancelValue: jest.fn()
    };
    const { container } = render(CheckBox, {
      value: "test",
      $$context: {
        groupContext: writable(mockGroupContext)
      }
    });
    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.checked).toEqual(true);
  });

  test("should remove itself if the checkbox is destroyed", () => {
    const mockGroupContext = {
      toggleOption: jest.fn(),
      value: ["test"],
      disabled: false,
      name: "test",
      registerValue: jest.fn(),
      cancelValue: jest.fn()
    };
    const { component } = render(CheckBox, {
      value: "test",
      $$context: {
        groupContext: writable(mockGroupContext)
      }
    });
    component.$destroy();
    expect(mockGroupContext.cancelValue).toHaveBeenCalledWith("test");
  });

  test("should render with disabled state if the group is disabled", () => {
    const mockGroupContext = {
      toggleOption: jest.fn(),
      value: [],
      disabled: true,
      name: "test",
      registerValue: jest.fn(),
      cancelValue: jest.fn()
    };

    const { container } = render(CheckBox, {
      disabled: true,
      $$context: {
        groupContext: writable(mockGroupContext)
      }
    });
    const input = container.getElementsByTagName("INPUT")[0];
    expect(input.disabled).toEqual(true);
  });
});
