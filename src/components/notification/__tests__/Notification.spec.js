import { render, clearContext, delay } from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import { get } from "svelte/store";
import notification from "../index";
import notificationStore from "@/components/notification/store";
import NotificationBasic from "examples/notification/demos/basic.demo.svelte";
import NotificationDuration from "examples/notification/demos/duration.demo.svelte";
import NotificationStatus from "examples/notification/demos/status.demo.svelte";
import NotificationButton from "examples/notification/demos/button.demo.svelte";
import NotificationIcon from "examples/notification/demos/icon.demo.svelte";
import NotificationStyle from "examples/notification/demos/style.demo.svelte";
import NotificationPlacement from "examples/notification/demos/placement.demo.svelte";
import NotificationUpdate from "examples/notification/demos/update.demo.svelte";
import NotificationDestroy from "./destroy-all.demo.svelte";
import NotificationCloseIcon from "./close-icon.demo.svelte";
import NotificationConfig from "./config.demo.svelte";

describe("Notification component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(NotificationBasic);
    expect(container.innerHTML).toContain("ant-notification");
  });

  test("should disappear after the default amount of time", async () => {
    const { container } = render(NotificationBasic);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-notification-notice");
    // Should disappear after the default delay + transition
    await delay(4800);
    expect(container.innerHTML).not.toContain("ant-notification-notice");
  });

  test("close icon", async () => {
    const { container } = render(NotificationBasic);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await fireEvent.click(
      container.querySelector(".ant-notification-notice-close")
    );
    await delay(300);
    expect(container.innerHTML).not.toContain("ant-notification-notice");
  });

  test("onClick option", async () => {
    const { container } = render(NotificationBasic);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await fireEvent.click(container.querySelector(".ant-notification-notice"));
    await delay(300);
    expect(container.innerHTML).toContain("Notification Clicked!");
  });

  test("custom duration", async () => {
    const description1 =
      "This is a notification that will disappear in 1.5 seconds";
    const description2 =
      "This is a notification that will never close on it's own";
    const { container } = render(NotificationDuration);

    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain(description1);
    await delay(2000);
    expect(container.innerHTML).not.toContain(description1);

    const secondButton = container.getElementsByTagName("BUTTON")[1];
    await fireEvent.click(secondButton);
    expect(container.innerHTML).toContain(description2);
    await delay(4800);
    // Message should still exist
    expect(container.innerHTML).toContain(description2);
  }, 7000);

  test("success icon", async () => {
    const { container } = render(NotificationStatus);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("anticon-check-circle");
  });

  test("info icon", async () => {
    const { container } = render(NotificationStatus);
    const button = container.getElementsByTagName("BUTTON")[1];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("anticon-info-circle");
  });

  test("warning icon", async () => {
    const { container } = render(NotificationStatus);
    const button = container.getElementsByTagName("BUTTON")[2];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("anticon-exclamation-circle");
  });

  test("error icon", async () => {
    const { container } = render(NotificationStatus);
    const button = container.getElementsByTagName("BUTTON")[3];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("anticon-close-circle");
  });

  test("custom button", async () => {
    const { container } = render(NotificationButton);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await fireEvent.click(
      container.querySelector(".ant-notification-notice-btn")
    );
    await delay(300);
    expect(container.innerHTML).toContain("Close button clicked!");
    // onClose should also be called
    expect(container.innerHTML).toContain("Notification closed");
  });

  test("custom icon", async () => {
    const { container } = render(NotificationIcon);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("anticon-smile");
  });

  test("custom style", async () => {
    const { container } = render(NotificationStyle);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("margin-left: -265px");
    expect(container.innerHTML).toContain("test-notification-demo-class");
  });

  test("placement", async done => {
    const { container } = render(NotificationPlacement);
    const buttons = container.getElementsByTagName("BUTTON");
    ["topLeft", "topRight", "bottomLeft", "bottomRight"].forEach(
      async (placement, index) => {
        // wrappers should be in the right position
        const positions = {
          left: ["topLeft", "bottomLeft"].includes(placement) ? "0px" : "",
          right: ["topRight", "bottomRight"].includes(placement) ? "0px" : "",
          top: ["topRight", "topLeft"].includes(placement) ? "24px" : "",
          bottom: ["bottomRight", "bottomLeft"].includes(placement)
            ? "24px"
            : ""
        };
        const wrapper = container.querySelector(
          `.ant-notification-${placement}`
        );
        Object.keys(positions).forEach(position => {
          expect(wrapper.style[position]).toEqual(positions[position]);
        });

        await fireEvent.click(buttons[index]);
        expect(container.innerHTML).toContain(`Notification ${placement}`);
        done();
      }
    );
  });

  test("updating content", async () => {
    const { container } = render(NotificationUpdate);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("Original Notification Title");
    await delay(1000);
    expect(container.innerHTML).not.toContain("Original Notification Title");
    expect(container.innerHTML).toContain("New description.");
  });

  test("destroy all", async () => {
    const { container } = render(NotificationDestroy);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await fireEvent.click(button);
    await fireEvent.click(button);
    notification.destroyAll();
    expect(get(notificationStore).notifications.length).toEqual(0);
  });

  test("custom close icon", async () => {
    const { container } = render(NotificationCloseIcon);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await delay(500);
    expect(container.innerHTML).toContain("anticon-close-square");
  });

  test("global config", async () => {
    const { container } = render(NotificationConfig);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await delay(500);
    const notificationWrapper = container.querySelector(
      ".ant-notification-bottomRight"
    );
    expect(notificationWrapper.innerHTML).toContain("Bottom Notification");
    expect(container.innerHTML).toContain("ant-notification-rtl");
    expect(notificationWrapper.style.bottom).toEqual("50px");
    await delay(1000);
    expect(notificationWrapper.innerHTML).not.toContain("Bottom Notification");
  });
});
