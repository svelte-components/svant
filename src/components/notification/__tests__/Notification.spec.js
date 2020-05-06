import Notification from "../Notification.svelte";
  import { render, clearContext } from "@/components/_util/testHelpers";

describe("Notification component", () => {
  afterEach(() => {
    clearContext();
  });

  test("should render", () => {
    const { container } = render(Notification);
    expect(container.innerHTML).toContain("ant-notification")
  });
});
  