import { render } from "@testing-library/svelte";
import Modal from "../Modal.svelte";

describe("Modal component", () => {
  test("should render", () => {
    const { container } = render(Modal);
    expect(container.innerHTML).toContain("ant-modal");
  });
});
