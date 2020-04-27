import { render } from "@testing-library/svelte";
import Collapse from "../Collapse.svelte";

describe("Collapse component", () => {
  test("should render", () => {
    const { container } = render(Collapse);
    expect(container.innerHTML).toContain("ant-collapse");
  });
});
