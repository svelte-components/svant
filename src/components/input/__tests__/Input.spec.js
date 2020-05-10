import Input from "../Input.svelte";
import { render, clearContext } from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import { delay } from "../../_util/testHelpers";

describe("Input component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(Input, { value: "" });
    expect(container.innerHTML).toContain("ant-input");
  });

  test("placeholder", () => {
    const { container } = render(Input, {
      value: "",
      placeholder: "Test Placeholder"
    });
    expect(container.innerHTML).toContain('placeholder="Test Placeholder"');
  });

  test("class", () => {
    const { container } = render(Input, {
      value: "",
      class: "test-class"
    });
    expect(container.innerHTML).toContain("test-class");
  });

  test("input event", async () => {
    const { container, component } = render(Input, { value: "" });
    const onInput = jest.fn();
    component.$on("input", onInput);
    const input = container.querySelector(".ant-input");
    await fireEvent.input(input, { target: { value: "a" } });
    expect(onInput).toHaveBeenCalled();
  });

  test("enter event", async () => {
    const { container, component } = render(Input, { value: "" });
    const onEnter = jest.fn();
    component.$on("enter", onEnter);
    const input = container.querySelector(".ant-input");
    await fireEvent.keyUp(input, { key: "Enter", code: 13, keyCode: 13 });
    expect(onEnter).toHaveBeenCalled();
  });
});
