import Select from "../Select.svelte";
import { render, clearContext } from "@/components/_util/testHelpers";

describe("Select component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(Select);
    expect(container.innerHTML).toContain("ant-select");
  });
});
