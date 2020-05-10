import Tag from "../Tag.svelte";
import { fireEvent } from "@testing-library/svelte";
import { render, clearContext, delay } from "@/components/_util/testHelpers";
import { PresetColors } from "@/components/_util/colors.js";
import { CheckCircleOutlined } from "@/components/icons";

describe("Tag component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(Tag);
    expect(container.innerHTML).toContain("ant-tag");
  });

  test("closable", async () => {
    const { container } = render(Tag, { closable: true });
    expect(container.innerHTML).toContain("anticon-close");
    await fireEvent.click(container.querySelector(".anticon-close"));
    await delay(300);
    expect(container.innerHTML).not.toContain("ant-tag");
  });

  test("prevent close", async () => {
    const { container, component } = render(Tag, { closable: true });
    const onClose = event => {
      event.detail.preventClose();
    };
    component.$on("close", onClose);
    await fireEvent.click(container.querySelector(".anticon-close"));
    await delay(300);
    expect(container.innerHTML).toContain("ant-tag");
  });

  test("colors", () => {
    for (const color of PresetColors) {
      const { container } = render(Tag, { color });
      expect(container.querySelector(`.ant-tag-${color}`)).toBeTruthy();
    }

    const { container } = render(Tag, { color: "#f50" });
    expect(
      container.querySelector(".ant-tag-has-color").style.backgroundColor
    ).toEqual("rgb(255, 85, 0)");
  });

  test("icon", () => {
    const { container } = render(Tag, { icon: CheckCircleOutlined });
    expect(container.innerHTML).toContain("anticon-check-circle");
  });

  test("checkable, checked true", () => {
    const { container } = render(Tag, { checked: true });
    expect(container.innerHTML).toContain(
      "ant-tag-checkable ant-tag-checkable-checked"
    );
  });

  test("checkable, checked false", () => {
    const { container } = render(Tag, { checked: false });
    expect(container.innerHTML).toContain("ant-tag-checkable");
    expect(container.innerHTML).not.toContain("ant-tag-checkable-checked");
  });
});
