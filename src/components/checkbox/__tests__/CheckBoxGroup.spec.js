import Checkbox from "../Checkbox.svelte";
import CheckboxGroup from "../CheckboxGroup.svelte";
import { render } from "@/components/_util/testHelpers";
import { get } from "svelte/store";
describe("CheckboxGroup component", () => {
  test("should render default", () => {
    const { container } = render(CheckboxGroup);
    expect(container.innerHTML).toContain("ant-checkbox-group");
  });

  test("should render with options", () => {
    const { container } = render(CheckboxGroup, {
      options: [
        {
          label: "Checkbox 1",
          value: "1"
        },
        {
          label: "Checkbox 2",
          value: "2"
        }
      ]
    });
    const inputs = container.getElementsByTagName("INPUT");

    expect(inputs.length).toEqual(2);
    expect(container.innerHTML).toContain("Checkbox 1");
    expect(container.innerHTML).toContain("Checkbox 2");
  });

  test("should render with sting options", () => {
    const { container } = render(CheckboxGroup, {
      options: ["Checkbox 1", "Checkbox 2"]
    });
    const inputs = container.getElementsByTagName("INPUT");

    expect(inputs.length).toEqual(2);
    expect(container.innerHTML).toContain("Checkbox 1");
    expect(container.innerHTML).toContain("Checkbox 2");
  });

  test('context should have expected values"', () => {
    const { component } = render(CheckboxGroup, {
      name: "test",
      value: ["abc"],
      disabled: true
    });
    const context = component.$$.context.get("checkBoxGroupContext");
    const contextVal = get(context);

    expect(typeof contextVal.registerValue).toEqual("function");
    expect(typeof contextVal.toggleOption).toEqual("function");
    expect(typeof contextVal.cancelValue).toEqual("function");
    expect(contextVal.name).toEqual("test");
    expect(contextVal.value).toEqual(["abc"]);
    expect(contextVal.disabled).toEqual(true);
  });

  test("should set value appropriately when toggleOption is called, if value is not passed", () => {
    const { component } = render(CheckboxGroup, {
      options: [
        {
          label: "Checkbox 1",
          value: "1"
        },
        {
          label: "Checkbox 2",
          value: "2"
        }
      ]
    });

    const onChange = jest.fn();
    component.$on("change", onChange);

    const context = component.$$.context.get("checkBoxGroupContext");
    const contextVal = get(context);

    contextVal.toggleOption({
      label: "Checkbox 1",
      value: "1"
    });

    const valueInx = component.$$.props.value;
    expect(component.$$.ctx[valueInx]).toEqual(["1"]);
    expect(onChange).toHaveBeenCalled();
  });

  test("should only emit values and not change the prop is value is present in the props", () => {
    const { component } = render(CheckboxGroup, {
      value: ["1"],
      options: [
        {
          label: "Checkbox 1",
          value: "1"
        },
        {
          label: "Checkbox 2",
          value: "2"
        }
      ]
    });

    const onChange = jest.fn();
    component.$on("change", onChange);

    const context = component.$$.context.get("checkBoxGroupContext");
    const contextVal = get(context);

    contextVal.toggleOption({
      label: "Checkbox 2",
      value: "2"
    });

    const valueInx = component.$$.props.value;
    expect(component.$$.ctx[valueInx]).toEqual(["1"]);
    expect(onChange).toHaveBeenCalled();
  });

  test("should emit value change if one of the checkboxes changes", () => {
    let checkBoxContainer1;

    const { component } = render(CheckboxGroup, {
      $$slots: {
        default: [
          {
            component: Checkbox,
            options: { value: "check1" },
            renderResults: ({ container }) => {
              checkBoxContainer1 = container;
            }
          },
          { component: Checkbox, options: { value: "check2" } }
        ]
      }
    });
    const onChange = jest.fn();
    component.$on("change", onChange);

    const input = checkBoxContainer1.getElementsByTagName("INPUT")[0];
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    input.checked = true;
    input.dispatchEvent(evt);

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0].detail).toEqual(["check1"]);
  });

  test("should set all the checkboxes to disabled", () => {
    let checkBoxContainer1;
    let checkBoxContainer2;

    render(CheckboxGroup, {
      disabled: true,
      $$slots: {
        default: [
          {
            component: Checkbox,
            options: { value: "check1" },
            renderResults: ({ container }) => {
              checkBoxContainer1 = container;
            }
          },
          {
            component: Checkbox,
            options: { value: "check2" },
            renderResults: ({ container }) => {
              checkBoxContainer2 = container;
            }
          }
        ]
      }
    });

    const input1 = checkBoxContainer1.getElementsByTagName("INPUT")[0];
    const input2 = checkBoxContainer2.getElementsByTagName("INPUT")[0];
    expect(input1.disabled).toEqual(true);
    expect(input2.disabled).toEqual(true);
  });
});
