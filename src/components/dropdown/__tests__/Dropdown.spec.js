import Dropdown from "../Dropdown.svelte";
import { render } from "@/components/_util/testHelpers";

describe("Dropdown component", () => {
  test("should render", () => {
    const { container } = render(Dropdown);
    expect(container.innerHTML).toContain("ant-dropdown");
  });
});
