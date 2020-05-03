import { render, clearContext, delay } from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import MessageBasic from "examples/message/demos/basic.demo.svelte";

describe("Message component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(MessageBasic);
    expect(container.innerHTML).toContain("ant-message");
  });

  test("should disappear after the default amount of time", async () => {
    const { container, findByText } = render(MessageBasic);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-notice");
    // Should disappear after the default delay + transition
    await delay(2500);
    expect(container.innerHTML).not.toContain("ant-message-notice");
  });
});
