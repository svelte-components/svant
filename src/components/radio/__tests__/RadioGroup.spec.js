import Radio from "../Radio.svelte";
import RadioGroup from "../RadioGroup.svelte";
import RadioButton from "../RadioButton.svelte";
import { render } from "@/components/_util/testHelpers";
import { get } from "svelte/store";
describe("RadioGroup component", () => {
  test("should render default", () => {
    const { container } = render(RadioGroup);
    expect(container.innerHTML).toContain("ant-radio-group");
  });

  test("should render with options", () => {
    const { container } = render(RadioGroup, {
      options: [
        {
          label: "Radio 1",
          value: "1"
        },
        {
          label: "Radio 2",
          value: "2"
        }
      ]
    });
    const inputs = container.getElementsByTagName("INPUT");

    expect(inputs.length).toEqual(2);
    expect(container.innerHTML).toContain("Radio 1");
    expect(container.innerHTML).toContain("Radio 2");
  });

  test("should render with sting options", () => {
    const { container } = render(RadioGroup, {
      options: ["Radio 1", "Radio 2"]
    });
    const inputs = container.getElementsByTagName("INPUT");

    expect(inputs.length).toEqual(2);
    expect(container.innerHTML).toContain("Radio 1");
    expect(container.innerHTML).toContain("Radio 2");
  });

  test('context should have expected values"', () => {
    const { component } = render(RadioGroup, {
      name: "test",
      value: ["abc"],
      disabled: true
    });
    const context = component.$$.context.get("radioGroupContext");
    const contextVal = get(context);

    expect(typeof contextVal.setValue).toEqual("function");
    expect(contextVal.name).toEqual("test");
    expect(contextVal.value).toEqual(["abc"]);
    expect(contextVal.disabled).toEqual(true);
  });

  test("should emit value change if one of the radios changes", () => {
    let radioContainer1;

    const { component } = render(RadioGroup, {
      $$slots: {
        default: [
          {
            component: Radio,
            options: { value: "radio1" },
            renderResults: ({ container }) => {
              radioContainer1 = container;
            }
          },
          { component: Radio, options: { value: "radio2" } }
        ]
      }
    });
    const onChange = jest.fn();
    component.$on("change", onChange);

    const input = radioContainer1.getElementsByTagName("INPUT")[0];
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    input.checked = true;
    input.dispatchEvent(evt);

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0].detail).toEqual("radio1");
  });

  test("should set all the checkboxes to disabled", () => {
    let radioContainer1;
    let radioContainer2;

    render(RadioGroup, {
      disabled: true,
      $$slots: {
        default: [
          {
            component: Radio,
            options: { value: "radio1" },
            renderResults: ({ container }) => {
              radioContainer1 = container;
            }
          },
          {
            component: Radio,
            options: { value: "radio2" },
            renderResults: ({ container }) => {
              radioContainer2 = container;
            }
          }
        ]
      }
    });

    const input1 = radioContainer1.getElementsByTagName("INPUT")[0];
    const input2 = radioContainer2.getElementsByTagName("INPUT")[0];
    expect(input1.disabled).toEqual(true);
    expect(input2.disabled).toEqual(true);
  });
  test("should add the radio button class if radio button is child", () => {
    const { container } = render(RadioGroup, {
      disabled: true,
      $$slots: {
        default: [
          {
            component: RadioButton
          }
        ]
      }
    });
    expect(container.innerHTML).toContain("ant-radio-group-button-group");
  });
});
