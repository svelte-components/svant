import { render } from "@testing-library/svelte";
import BasicModal from "examples/modal/demos/basic.demo.svelte";
import AsyncCloseModal from "examples/modal/demos/async.demo.svelte";
import CustomFooterModal from "examples/modal/demos/footer.demo.svelte";
import { delay } from "../../_util/testHelpers";

describe("Modal component", () => {
  test("should render correctly", async () => {
    const { container } = render(BasicModal);
    container.querySelector(".ant-btn").click();
    await delay(200);
    expect(container.querySelector(".ant-modal")).toBeVisible();
    expect(container.querySelector(".ant-modal-header").textContent).toEqual(
      "Basic Modal"
    );
    expect(
      container
        .querySelector(".ant-modal-body")
        .innerHTML.includes("Some contents...")
    ).toBeTruthy();
    const footer = container.querySelector(".ant-modal-footer");
    expect(footer.querySelectorAll(".ant-btn")).toHaveLength(2);
  });

  test("confirm loading", async () => {
    const { container } = render(AsyncCloseModal);

    container.querySelector(".ant-btn").click();
    await delay(200);

    const okButton = container.querySelector(".ant-modal .ant-btn-primary");
    const okButtonHasIcon = () => okButton.innerHTML.includes("svg");

    expect(okButtonHasIcon()).toBeFalsy();

    okButton.click();
    await delay(100);
    expect(okButtonHasIcon()).toBeTruthy();
  });

  test("custom footer", async () => {
    const { container } = render(CustomFooterModal);
    container.querySelector(".ant-btn").click();
    await delay(200);
    expect(
      container
        .querySelector(".ant-modal .ant-btn")
        .innerHTML.includes("Return")
    ).toBeTruthy();
  });
});
