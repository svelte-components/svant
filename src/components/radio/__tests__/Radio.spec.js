import { render } from "@testing-library/svelte";
import Radio from "../Radio.svelte";

describe("Radio component", () => {
  test("should render", () => {
    const { container } = render(Radio);
    expect(container.innerHTML).toContain("ant-radio");
  });
});
