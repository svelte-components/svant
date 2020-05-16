import { render, clearContext, delay } from "@/components/_util/testHelpers";
import { fireEvent } from "@testing-library/svelte";
import MessageBasic from "examples/message/demos/basic.demo.svelte";
import MessageStatus from "examples/message/demos/status.demo.svelte";
import MessageDuration from "examples/message/demos/duration.demo.svelte";
import MessageLoading from "examples/message/demos/loading.demo.svelte";
import MessagePromise from "examples/message/demos/promise.demo.svelte";
import MessageUpdate from "examples/message/demos/update.demo.svelte";
import MessageConfig from "./config.demo.svelte";

describe("Message component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(MessageBasic);
    expect(container.innerHTML).toContain("ant-message");
  });

  test("should disappear after the default amount of time", async () => {
    const { container } = render(MessageBasic);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-notice");
    // Should disappear after the default delay + transition
    await delay(3500);
    expect(container.innerHTML).not.toContain("ant-message-notice");
  });

  test("info type", async () => {
    const { container } = render(MessageBasic);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-info");
    expect(container.innerHTML).toContain("anticon-info-circle");
  });

  test("success type", async () => {
    const { container } = render(MessageStatus);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-success");
    expect(container.innerHTML).toContain("anticon-check-circle");
  });

  test("error type", async () => {
    const { container } = render(MessageStatus);
    const button = container.getElementsByTagName("BUTTON")[1];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-error");
    expect(container.innerHTML).toContain("anticon-close-circle");
  });

  test("warning type", async () => {
    const { container } = render(MessageStatus);
    const button = container.getElementsByTagName("BUTTON")[2];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-warning");
    expect(container.innerHTML).toContain("anticon-exclamation-circle");
  });

  test("warning type", async () => {
    const { container } = render(MessageLoading);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("ant-message-loading");
    expect(container.innerHTML).toContain("anticon-loading");
    expect(container.innerHTML).toContain("anticon-spin");
  });

  test("custom duration", async () => {
    const message1 =
      "This is a prompt message for success, and it will disappear in 1 second";
    const message2 = "This is a prompt that will never close";
    const { container } = render(MessageDuration);

    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain(message1);
    await delay(1500);
    expect(container.innerHTML).not.toContain(message1);

    const secondButton = container.getElementsByTagName("BUTTON")[1];
    await fireEvent.click(secondButton);
    expect(container.innerHTML).toContain(message2);
    await delay(3500);
    // Message should still exist
    expect(container.innerHTML).toContain(message2);
  }, 6000);

  test("dismissing asynchronously", async () => {
    const { container } = render(MessageLoading);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("Action in progress..");
    await delay(3000);
    expect(container.innerHTML).not.toContain("Action in progress..");
  });

  test("promise interface", async () => {
    const { container } = render(MessagePromise);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("Action in progress..");
    await delay(1800);
    expect(container.innerHTML).not.toContain("Action in progress..");
    expect(container.innerHTML).toContain("Loading finished");
  });

  test("updating a message", async () => {
    const { container } = render(MessageUpdate);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    expect(container.innerHTML).toContain("Loading...");
    await delay(1000);
    expect(container.innerHTML).not.toContain("Loading...");
    expect(container.innerHTML).toContain("Loaded!");
  });

  test("custom icon", async () => {
    const { container } = render(MessagePromise);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    await delay(2500);
    expect(container.innerHTML).toContain("anticon-fire");
  });

  test("global config", async () => {
    const { container } = render(MessageConfig);
    const button = container.getElementsByTagName("BUTTON")[0];
    await fireEvent.click(button);
    const messageWrapper = container.querySelector(".ant-message");
    expect(messageWrapper.style.top).toEqual("100px");
    expect(messageWrapper.innerHTML).toContain("ant-message-rtl");

    // maxCount
    for (let iteration in [1, 2, 3, 4, 5, 6]) {
      await fireEvent.click(button);
    }
    await delay(1000);
    expect(
      (
        container.innerHTML.match(
          /This is a message with some global config/g
        ) || []
      ).length
    ).toEqual(3);
  });
});
