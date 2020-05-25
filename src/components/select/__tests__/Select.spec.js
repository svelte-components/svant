import {
  render,
  clearContext,
  delay,
  pressKey
} from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import Select from "../Select.svelte";
import SelectBasic from "examples/select/demos/basic.demo.svelte";
import SelectSearch from "examples/select/demos/search.demo.svelte";
import SelectMultiple from "examples/select/demos/multiple.demo.svelte";
import SelectTags from "examples/select/demos/tags.demo.svelte";
import SelectOptionGroups from "examples/select/demos/option-group.demo.svelte";

Element.prototype.scrollIntoView = jest.fn();

const renderAndOpenSelect = async example => {
  const { container, component } = render(example);
  await delay(300);
  const select = container.querySelector(".ant-select");
  const dropdown = container.querySelector(".ant-select-dropdown");
  await fireEvent.click(select);
  return { container, component, select, dropdown };
};

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
    const { container } = await renderAndOpenSelect(SelectBasic);
    const selectedValue = container.querySelector(".ant-select-selection-item");
    expect(selectedValue.innerHTML).toContain("Lucy");
    const options = container.querySelectorAll(
      ".ant-select-dropdown .ant-select-item-option"
    );
    expect(options[1].className).toContain("ant-select-item-option-active");
    const firstOption = container.querySelector(".ant-select-item");
    await fireEvent.mouseEnter(firstOption);
    expect(firstOption.className).toContain("ant-select-item-option-active");
    expect(options[1].className).not.toContain("ant-select-item-option-active");
    await fireEvent.click(firstOption);
    expect(selectedValue.innerHTML).toContain("Jack");
    expect(firstOption.className).toContain("ant-select-item-option-selected");
  });

  test("change event", async () => {
    const { container } = await renderAndOpenSelect(SelectBasic);
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
    const { container, select } = await renderAndOpenSelect(SelectBasic);
    const disabledItem = container.querySelectorAll(".ant-select-item")[2];
    expect(disabledItem.className).toContain("disabled");
    await fireEvent.click(disabledItem);
    expect(select.innerHTML).not.toContain("Disabled");
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
    const { select, dropdown } = await renderAndOpenSelect(SelectSearch);
    expect(select.innerHTML).toContain("anticon-search");
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(3);
    const input = select.querySelector("input");
    await fireEvent.input(input, { target: { value: "j" } });
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(1);
    await fireEvent.input(input, { target: { value: "jj" } });
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(0);
    await fireEvent.input(input, { target: { value: "j" } });
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

  test("close on escape press", async () => {
    const { container } = render(SelectBasic);
    await delay(300);
    const selects = container.querySelectorAll(".ant-select");
    await fireEvent.click(selects[0]);
    const dropdown = container.querySelectorAll(".ant-select-dropdown")[0];
    expect(dropdown.className).toContain("ant-select-dropdown-open");
    // press escape
    await pressKey({ key: "Escape", which: 27 });
    expect(dropdown.className).not.toContain("ant-select-dropdown-open");
  });

  describe("multiple select", () => {
    test("can display multiple options", async () => {
      const { select, dropdown } = await renderAndOpenSelect(SelectMultiple);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
      await fireEvent.click(
        dropdown.querySelectorAll(".ant-select-item-option")[1]
      );
      // dropdown should not close
      expect(dropdown).toBeVisible();
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(3);
      // should be able to deselect
      await fireEvent.click(
        dropdown.querySelectorAll(".ant-select-item-option")[1]
      );
      await delay(300);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
    });

    test("can search", async () => {
      const { select, dropdown } = await renderAndOpenSelect(SelectMultiple);
      expect(
        dropdown.querySelectorAll(".ant-select-item").length > 1
      ).toBeTruthy();
      const input = select.querySelector("input");
      await fireEvent.input(input, { target: { value: "b" } });
      expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(1);
      await fireEvent.input(input, { target: { value: "jj" } });
      expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(0);
    });

    test("backspace removes last selected item", async () => {
      const { select } = await renderAndOpenSelect(SelectMultiple);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
      await pressKey({ key: "Backspace", which: 8 });
      await delay(300);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(1);
    });

    test("backspace removes added tags", async () => {
      const { select, dropdown } = await renderAndOpenSelect(SelectTags);
      const input = select.querySelector("input");
      await fireEvent.input(input, { target: { value: "b" } });
      await pressKey({ key: "Enter", which: 13 });
      expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(27);
      await pressKey({ key: "Backspace", which: 8 });
      expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(26);
    });

    test("tag close icon removes option", async () => {
      const { container } = render(SelectMultiple);
      await delay(300);
      const select = container.querySelector(".ant-select");
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(2);
      expect(select.innerHTML).toContain("anticon-close");
      await fireEvent.click(select.querySelector(".anticon-close"));
      await delay(300);
      expect(
        select.querySelectorAll(".ant-select-selection-item").length
      ).toEqual(1);
    });

    test("focus on input after item selected or deselected", async () => {
      const { select, dropdown } = await renderAndOpenSelect(SelectMultiple);
      const input = select.querySelector("input");
      await fireEvent.click(dropdown.querySelector(".ant-select-item-option"));
      expect(input).toBe(document.activeElement);
    });

    test("single mode keyboard navigation and selection", async () => {
      // Should allow arrows to change active
      const { container, component } = await renderAndOpenSelect(SelectBasic);
      const options = container.querySelectorAll(
        ".ant-select-dropdown .ant-select-item-option"
      );
      expect(options[1].className).toContain("ant-select-item-option-active");
      await pressKey({ key: "ArrowDown", which: 40 });
      // Should have skipped the disable option
      expect(options[3].className).toContain("ant-select-item-option-active");
      await pressKey({ key: "ArrowUp", which: 38 });
      await pressKey({ key: "ArrowUp", which: 38 });
      expect(options[0].className).toContain("ant-select-item-option-active");
      expect(container.querySelector(".ant-select-dropdown-open")).toBeTruthy();
      expect(component.$$.ctx[0]).toEqual("lucy");
      await pressKey({ key: "Enter", which: 13 });
      expect(container.querySelector(".ant-select-dropdown-open")).toBeFalsy();
      // Selected label should have changed
      expect(component.$$.ctx[0]).toEqual("jack");
    });

    test("multiple mode keyboard navigation and selection", async () => {
      const { container } = await renderAndOpenSelect(SelectMultiple);
      const options = container.querySelectorAll(
        ".ant-select-dropdown .ant-select-item-option"
      );
      // Two items should be selected
      expect(options[0].className).toContain("ant-select-item-option-selected");
      expect(options[2].className).toContain("ant-select-item-option-selected");
      // remove both selected items with the enter key
      await pressKey({ key: "Enter", which: 13 });
      await pressKey({ key: "ArrowDown", which: 40 });
      await pressKey({ key: "ArrowDown", which: 40 });
      await pressKey({ key: "Enter", which: 13 });
      expect(
        container.querySelector(".ant-select-item-option-selected")
      ).toBeFalsy();
      // dropdown should still be open
      expect(container.querySelector(".ant-select-dropdown-open")).toBeTruthy();
      await pressKey({ key: "Enter", which: 13 });
      expect(options[2].className).toContain("ant-select-item-option-selected");
    });
  });

  const selectAndDeselectTags = async ({ useKeyboard, done }) => {
    const tagText = "test tag";
    const { select, dropdown } = await renderAndOpenSelect(SelectTags);
    const input = select.querySelector("input");
    await fireEvent.input(input, { target: { value: "test tag" } });
    expect(
      dropdown.querySelectorAll(".ant-select-item-option")[0].innerHTML
    ).toContain(tagText);

    if (useKeyboard) {
      await pressKey({ key: "Enter", which: 13 });
    } else {
      await fireEvent.click(
        dropdown.querySelectorAll(".ant-select-item-option")[0]
      );
    }

    expect(
      dropdown.querySelectorAll(".ant-select-item-option")[0].innerHTML
    ).not.toContain(tagText);
    // should have been added to the the end of the dropdown options
    const lastItem = dropdown.querySelectorAll(".ant-select-item")[26];
    expect(lastItem.innerHTML).toContain(tagText);
    expect(lastItem.className).toContain("ant-select-item-option-selected");

    if (useKeyboard) {
      for (let i = 0; i < 27; i++) {
        await pressKey({ key: "ArrowDown", which: 40 });
      }
      expect(lastItem.className).toContain("ant-select-item-option-active");
      // deselect the added tag using the enter key
      await pressKey({ key: "Enter", which: 13 });
    } else {
      await fireEvent.click(dropdown.querySelectorAll(".ant-select-item")[26]);
    }
    expect(dropdown.querySelectorAll(".ant-select-item").length).toEqual(26);
    done();
  };

  test("tags mode keyboard navigation and selection", done => {
    selectAndDeselectTags({ useKeyboard: true, done });
  });

  test("can add and remove tags", done => {
    selectAndDeselectTags({ useKeyboard: false, done });
  });

  test("enter should open the dropdown", async () => {
    const { dropdown } = await renderAndOpenSelect(SelectBasic);
    expect(dropdown.className).toContain("ant-select-dropdown-open");
    await pressKey({ key: "Enter", which: 13 });
    expect(dropdown.className).not.toContain("ant-select-dropdown-open");
    await pressKey({ key: "Enter", which: 13 });
    expect(dropdown.className).toContain("ant-select-dropdown-open");
  });

  test("arrows should infinitely navigate through the list", async () => {
    const { dropdown } = await renderAndOpenSelect(SelectBasic);
    await pressKey({ key: "ArrowUp", which: 38 });
    // Should bring us past the first item to the bottom of the list
    await pressKey({ key: "ArrowUp", which: 38 });
    expect(
      dropdown.querySelectorAll(".ant-select-item")[3].className
    ).toContain("active");
    await pressKey({ key: "ArrowDown", which: 40 });
    expect(
      dropdown.querySelectorAll(".ant-select-item")[0].className
    ).toContain("active");
  });

  test("size small", () => {
    const { container } = render(Select, { size: "small", value: "foo" });
    const select = container.querySelector(".ant-select");
    expect(select.className).toContain("-sm");
  });

  test("size large", () => {
    const { container } = render(Select, { size: "large", value: "foo" });
    const select = container.querySelector(".ant-select");
    expect(select.className).toContain("-lg");
  });

  test("option groups should allow arrow navigation", async () => {
    const { dropdown } = await renderAndOpenSelect(SelectOptionGroups);
    expect(
      dropdown.querySelectorAll(".ant-select-item-option")[1].className
    ).toContain("active");
    await pressKey({ key: "ArrowDown", which: 40 });
    // should skip the group heading
    expect(
      dropdown.querySelectorAll(".ant-select-item-option")[2].className
    ).toContain("active");
    await pressKey({ key: "ArrowUp", which: 38 });
    // should skip heading on the way up as well
    expect(
      dropdown.querySelectorAll(".ant-select-item-option")[1].className
    ).toContain("active");
  });

  test("arrows still work if there is no active option in the DOM", async () => {
    const removeActiveClass = () => {
      const activeOption = dropdown.querySelector(
        ".ant-select-item-option-active"
      );
      activeOption.classList.remove("ant-select-item-option-active");
      expect(
        dropdown.querySelector(".ant-select-item-option-active")
      ).toBeFalsy();
    };

    const { dropdown } = await renderAndOpenSelect(SelectSearch);
    removeActiveClass();

    await pressKey({ key: "ArrowUp", which: 38 });
    expect(
      dropdown.querySelector(".ant-select-item-option-active")
    ).toBeTruthy();

    removeActiveClass();

    await pressKey({ key: "ArrowDown", which: 40 });
    expect(
      dropdown.querySelector(".ant-select-item-option-active")
    ).toBeTruthy();
  });

  test("borderless option", () => {
    const { container } = render(Select, { value: "", borderless: true });
    expect(container.innerHTML).toContain("ant-select-borderless");
  });
});
