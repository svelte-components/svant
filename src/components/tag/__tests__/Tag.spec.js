import Tag from "../Tag.svelte";
import { fireEvent } from "@testing-library/svelte";
import { render, clearContext, delay } from "@/components/_util/testHelpers";

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
});
