import Menu from "../Menu.svelte";
  import { render } from "@/components/_util/testHelpers";

describe("Menu component", () => {
  test("should render", () => {
    const { container } = render(Menu);
    expect(container.innerHTML).toContain("ant-menu")
  });
});
  