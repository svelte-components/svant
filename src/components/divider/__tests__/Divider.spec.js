import Divider from "../Divider.svelte";
import { render } from "@/components/_util/testHelpers";

describe("Divider component", () => {
  test("should render", () => {
    const { container } = render(Divider);
    expect(container.innerHTML).toContain("ant-divider");
  });

  test("dashed", () => {
    const { container } = render(Divider, { dashed: true });
    expect(container.innerHTML).toContain("ant-divider-dashed");
  });
});
