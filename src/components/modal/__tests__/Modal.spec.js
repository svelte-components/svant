import { render, fireEvent } from "@testing-library/svelte";
import BasicModal from "examples/modal/demos/basic.demo.svelte";
import AsyncCloseModal from "examples/modal/demos/async.demo.svelte";
import CustomFooterModal from "examples/modal/demos/footer.demo.svelte";
import ConfirmModal from "examples/modal/demos/confirm.demo.svelte";
import InformationModal from "examples/modal/demos/information.demo.svelte";
import DestroyModal from "examples/modal/demos/update-destroy.demo.svelte";
import ModalPositioning from "examples/modal/demos/positioning.demo.svelte";
import DestroyAllModal from "examples/modal/demos/destroy-all.demo.svelte";
import AfterCloseModal from "./helperComponents/AfterClose.svelte";
import { delay } from "../../_util/testHelpers";
import { Modal } from "svant";

describe("Modal component", () => {
  test("should render correctly", async () => {
    const { container, getByText } = render(BasicModal);
    await fireEvent.click(getByText("Open Modal"));
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
    const { container, getByText } = render(AsyncCloseModal);
    await fireEvent.click(getByText("Open Modal with async logic"));
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
    await delay(400);

    okButton = container.querySelector(
      ".ant-modal-confirm-btns .ant-btn-danger"
    );
    expect(okButton).toBeDisabled();

    // cleanup
    container.innerHTML = "";
  });

  test("Information Modal Dialog", async done => {
    const { container } = render(InformationModal);
    const iconTypes = ["info", "check", "close", "exclamation"];
    const buttons = container.querySelectorAll(
      ".information-buttons > .ant-btn"
    );

    iconTypes.forEach(async (type, index) => {
      const button = buttons[index];
      button.click();
      await delay(300);

      try {
        expect(container.querySelector(`.anticon-${type}-circle`)).toBeTruthy();
        if (type === "exclamation") {
          // cleanup
          container.innerHTML = "";
          done();
        }
      } catch (e) {
        done.fail(e);
      }
    });
  });

  test("destroy modal", async () => {
    const { container, getByText } = render(DestroyModal);
    await fireEvent.click(getByText("Open modal to close in 3s"));
    await delay(200);

    expect(container.querySelector(".ant-modal")).toBeTruthy();

    await delay(4000);
    // Modal should be destroyed
    expect(container.querySelector(".ant-modal")).toBeFalsy();

    // cleanup
    container.innerHTML = "";
  });

  test("positioning", async () => {
    const { container, getByText } = render(ModalPositioning);
    await fireEvent.click(getByText("Open 20px from the top"));
    await delay(300);
    expect(container.querySelector(".ant-modal").style.top).toEqual("20px");
    await fireEvent.click(getByText("OK"));
    await fireEvent.click(getByText("Vertically centered"));
    await delay(300);
    expect(container.querySelector(".ant-modal-centered")).toBeTruthy();
  });

  test("afterClose prop", async done => {
    const mockLogFunction = jest.fn();
    const originalConsole = { ...console };
    console = {
      ...originalConsole,
      log: string => {
        mockLogFunction(string);
      }
    };

    const { container, getByText } = render(AfterCloseModal);
    await fireEvent.click(getByText("Open Modal"));
    await delay(400);
    await fireEvent.click(getByText("OK"));
    await delay(400);
    expect(mockLogFunction).toBeCalledWith("afterClose called");

    // Cleanup
    container.innerHTML = "";
    console = originalConsole;
    done();
  });

  // ** Keep this test as the last test **
  // Having an issue related to https://github.com/sveltejs/svelte/issues/2086
  // The fix would be a simple change to https://github.com/sveltejs/svelte/blob/ff5f25249e39985b6ca88c6815d123f26e40402a/src/runtime/internal/dom.ts#L12
  test("destroyAll()", async done => {
    const { container, findByText } = render(DestroyAllModal);
    container.querySelector(".ant-btn").click();
    // needs extra time to open all three
    await delay(1500);

    expect(container.querySelectorAll(".ant-modal")).toHaveLength(3);

    const destroyAllSpy = jest.spyOn(Modal, "destroyAll");

    const allButtons = container.querySelectorAll(".ant-btn");
    const lastOkButton = allButtons[allButtons.length - 1];
    lastOkButton.click();

    expect(destroyAllSpy).toHaveBeenCalled();
    // cleanup
    container.innerHTML = "";
    done();
  });
  // ** See comment above about last test
});
