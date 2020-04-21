import { render } from "@testing-library/svelte";
import BasicModal from "examples/modal/demos/basic.demo.svelte";
import flushPromises from "flush-promises";

describe("Modal component", () => {
  test("should render correctly", async () => {
    const { container } = render(BasicModal);
    container.querySelector(".ant-btn").click();
    await flushPromises();
    expect(container.querySelector(".ant-modal")).toBeVisible();
    expect(container.querySelector(".ant-modal-header").textContent).toEqual(
      "Basic Modal"
    );
    expect(
      container
        .querySelector(".ant-modal-body")
        .innerText.includes("Some contents...")
    ).toBeTruthy();
    const footer = container.querySelector(".ant-modal-footer");
    expect(footer.querySelectorAll(".ant-btn")).toHaveLength(2);
  });
});
