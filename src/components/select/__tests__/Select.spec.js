import { render, clearContext, delay } from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import Select from "../Select.svelte";
import SelectBasic from "examples/select/demos/basic.demo.svelte";
import SelectSearch from "examples/select/demos/search.demo.svelte";

describe("Select component", () => {
  const originalConsole = { ...console };

  beforeEach(() => {
    console = {
      ...console,
      log: jest.fn()
    };
  });

  afterEach(() => {
    console = { ...originalConsole };
    clearContext();
  });

  test("basic functionality", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const selectedValue = container.querySelector(".ant-select-selection-item");
    expect(selectedValue.innerHTML).toContain("Lucy");
    const select = container.querySelector(".ant-select");
    await fireEvent.click(select);
    expect(
      container.querySelector(".ant-select-item-option-active")
    ).toBeFalsy();
    const firstOption = container.querySelector(".ant-select-item");
    await fireEvent.mouseEnter(firstOption);
    expect(firstOption.className).toContain("ant-select-item-option-active");
    await fireEvent.mouseLeave(firstOption);
    expect(firstOption.className).not.toContain(
      "ant-select-item-option-active"
    );
    await fireEvent.click(firstOption);
    expect(selectedValue.innerHTML).toContain("Jack");
    expect(firstOption.className).toContain("ant-select-item-option-selected");
  });

  test("change event", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelector(".ant-select");
    await fireEvent.click(select);
    const firstOption = container.querySelector(".ant-select-item");
    const mockLog = jest.fn();
    console = {
      ...console,
      log: mockLog
    };
    await fireEvent.click(firstOption);
    expect(mockLog).toBeCalledWith("Selected: jack");
  });

  test("option disabled", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelector(".ant-select");
    await fireEvent.click(select);
    const disabledItem = container.querySelectorAll(".ant-select-item")[2];
    expect(disabledItem.className).toContain("disabled");
    const mockLog = jest.fn();
    console = {
      ...console,
      log: mockLog
    };
    await fireEvent.click(disabledItem);
    expect(mockLog).not.toHaveBeenCalled();
  });

  test("whole select disabled", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelectorAll(".ant-select")[1];
    expect(select.className).toContain("disabled");
    await fireEvent.click(select);
    expect(container.querySelector(".ant-select-dropdown-open")).toBeFalsy();
  });

  test("loading icon", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelectorAll(".ant-select")[2];
    expect(select.innerHTML).toContain("ant-select-arrow-loading");
  });

  test("clearable", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const select = container.querySelectorAll(".ant-select")[3];
    const dropdown = container.querySelectorAll(".ant-select-dropdown")[3];
    expect(select.innerHTML).not.toContain("anticon-close-circle");
    await fireEvent.mouseEnter(select);
    expect(select.innerHTML).toContain("anticon-close-circle");
    await fireEvent.mouseLeave(select);
    expect(select.innerHTML).not.toContain("anticon-close-circle");
    await fireEvent.click(select);
    expect(
      dropdown.querySelector(".ant-select-item-option-selected")
    ).toBeTruthy();
    await fireEvent.mouseEnter(select);
    const clearIcon = select.querySelector(".anticon-close-circle");
    await fireEvent.click(clearIcon);
    expect(
      dropdown.querySelector(".ant-select-item-option-selected")
    ).toBeFalsy();
  });

  test("placeholder", () => {
    const { container } = render(Select, {
      placeholder: "Test Placeholder",
      value: ""
    });
    const placeholder = container.querySelector(
      ".ant-select-selection-placeholder"
    );
    expect(placeholder.innerHTML).toContain("Test Placeholder");
  });

  test("search field", async () => {
    const { container } = render(SelectSearch);
    await delay(300);
    const select = container.querySelector(".ant-select");
    const dropdown = container.querySelector(".ant-select-dropdown");
    await fireEvent.click(select);
    expect(select.innerHTML).toContain("anticon-search");
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(3);
    const input = select.querySelector("input");
    await fireEvent.input(input, { target: { value: "j" } });
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(1);
    await fireEvent.input(input, { target: { value: "jj" } });
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(0);
    expect(dropdown.innerHTML).toContain("no-results");
  });

  test("close on click outside", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const selects = container.querySelectorAll(".ant-select");
    await fireEvent.click(selects[0]);
    const dropdown = container.querySelectorAll(".ant-select-dropdown")[0];
    expect(dropdown.className).toContain("ant-select-dropdown-open");
    // click outside
    await fireEvent.mouseUp(container.querySelector(".ant-message"));
    expect(dropdown.className).not.toContain("ant-select-dropdown-open");
  });
});
