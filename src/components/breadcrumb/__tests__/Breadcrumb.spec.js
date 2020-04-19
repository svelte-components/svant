import { render } from "@testing-library/svelte";
import BreadcrumbBasic from "examples/breadcrumb/demos/basic.demo.svelte";
import BreadcrumbWithIcon from "examples/breadcrumb/demos/icon.demo.svelte";
import BreadcrumbSeparator from "examples/breadcrumb/demos/separator.demo.svelte";
import BreadcrumbMultipleSeparator from "examples/breadcrumb/demos/multiple-separator.demo.svelte";

describe("Breadcrumb component", () => {
  test("should render correctly", () => {
    const { container } = render(BreadcrumbBasic);
    expect(container).toHaveTextContent(
      "Home / Application Center / Application List / An Application"
    );
  });

  test("should render breadcrumb items with hrefs", () => {
    const { container } = render(BreadcrumbBasic);
    expect(container.querySelectorAll("a")).toHaveLength(2);
  });

  test("with an icon", () => {
    const { container } = render(BreadcrumbWithIcon);
    expect(container.querySelector(".anticon-home svg")).toBeTruthy();
    expect(container.querySelector(".anticon-user svg")).toBeTruthy();
  });

  test("custom text separator", () => {
    const { container } = render(BreadcrumbSeparator);
    const firstExample = container.querySelector(".ant-breadcrumb");
    expect(firstExample).toHaveTextContent(
      "Home > Application Center > Application List > An Application"
    );
  });

  test("icon as a separator", () => {
    const { container } = render(BreadcrumbSeparator);
    const iconExample = container.querySelectorAll(".ant-breadcrumb")[1];
    expect(iconExample.querySelector(".anticon-caret-right svg")).toBeTruthy();
  });

  test("multiple separators", () => {
    const { container } = render(BreadcrumbMultipleSeparator);
    expect(
      container.querySelectorAll(".anticon-caret-right svg").length
    ).toEqual(2);
  });
});
