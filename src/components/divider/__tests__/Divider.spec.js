import Divider from "../Divider.svelte";
import { render, clearContext } from "@/components/_util/testHelpers";
import { CONFIG_KEY } from "@/provider/config-provider";
import { writable } from "svelte/store";

describe("Divider component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(Divider);
    expect(container.innerHTML).toContain("ant-divider");
  });

  test("vertical", () => {
    const { container } = render(Divider, { type: "vertical" });
    expect(container.innerHTML).toContain("ant-divider-vertical");
  });

  test("dashed", () => {
    const { container } = render(Divider, { dashed: true });
    expect(container.innerHTML).toContain("ant-divider-dashed");
  });

  test("title orientation", () => {
    // other orientations use the same logic so only need to test one.
    let node = document.createTextNode("Text");
    const { container } = render(Divider, {
      orientation: "right",
      $$slots: { default: node }
    });
    expect(container.innerHTML).toContain(
      "ant-divider-with-text ant-divider-with-text-right"
    );
    expect(
      container.querySelector("span.ant-divider-inner-text").innerHTML
    ).toContain("Text");
  });

  test("plain title", () => {
    let node = document.createTextNode("Text");
    const { container } = render(Divider, {
      orientation: "right",
      plain: true,
      $$slots: { default: node }
    });
    expect(container.innerHTML).toContain("ant-divider-plain");
  });

  test("style prop", () => {
    const { container } = render(Divider, { style: "height: 1rem;" });
    const divider = container.querySelector(".ant-divider");
    expect(divider.style.height).toEqual("1rem");
  });

  test("custom class", () => {
    const { container } = render(Divider, { class: "test-class" });
    const divider = container.querySelector(".ant-divider");
    expect(divider.className).toContain("test-class");
  });

  test("rtl", () => {
    const { container } = render(Divider, {
      $$context: {
        [`${CONFIG_KEY}`]: writable({
          direction: "rtl",
          getPrefixCls: () => "ant-divider"
        })
      }
    });
    expect(container.innerHTML).toContain("ant-divider-rtl");
  });
});
