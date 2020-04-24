import { render } from "@testing-library/svelte";
import BasicModal from "examples/modal/demos/basic.demo.svelte";
import AsyncCloseModal from "examples/modal/demos/async.demo.svelte";
import CustomFooterModal from "examples/modal/demos/footer.demo.svelte";
import ConfirmModal from "examples/modal/demos/confirm.demo.svelte";
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

  test("confirm modal", async () => {
    const { container } = render(ConfirmModal);
    container.querySelector(".ant-btn").click();
    await delay(200);

    // should not have header or footer
    expect(container.querySelector(".ant-modal-header")).toBeFalsy();
    expect(container.querySelector(".ant-modal-footer")).toBeFalsy();

    let confirmBody = container.querySelector(
      ".ant-modal-confirm-body-wrapper .ant-modal-confirm-body"
    );
    expect(
      confirmBody.innerHTML.includes("Do you want to delete these items?")
    ).toBeTruthy();

    // Button actions should close the modal
    let okButton = container.querySelector(
      ".ant-modal-confirm-btns .ant-btn-primary"
    );
    okButton.click();
    await delay(2200);
    expect(
      container.querySelector(
        ".ant-modal-confirm-body-wrapper .ant-modal-confirm-body"
      )
    ).toBeFalsy();

    // Buttons are customizable
    container.querySelectorAll(".ant-btn")[1].click();
    await delay(200);

    // Ok button should be red and say "Yes"
    okButton = container.querySelector(
      ".ant-modal-confirm-btns .ant-btn-danger"
    );
    expect(okButton.innerHTML.includes("Yes")).toBeTruthy();

    // close the modal
    okButton.click();

    // Additional props can be added to the buttons
    container.querySelectorAll(".ant-btn")[2].click();
    await delay(200);

    okButton = container.querySelector(
      ".ant-modal-confirm-btns .ant-btn-danger"
    );
    expect(okButton).toBeDisabled();
  });
});
