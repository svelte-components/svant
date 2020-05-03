import { render } from "@testing-library/svelte";
import MessageBasic from "examples/message/demos/basic.demo.svelte";

describe("Message component", () => {
  test("should render", () => {
    const { container } = render(MessageBasic);
    expect(container.innerHTML).toContain("ant-message");
  });
});
