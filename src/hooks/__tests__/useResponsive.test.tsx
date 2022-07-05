import { render, renderHook, screen } from "@testing-library/react";
import useResponsive from "../useResponsive";

const TestComponent = () => {
  useResponsive(10, {
    pc: 1920,
    break: 768,
    mobile: 360
  });

  return <h1>hi22</h1>;
};

describe("useResponsive", () => {
  it("Check Root FontSize Change", () => {
    const { container } = render(<TestComponent />);

    screen.debug(container);
    console.log("object");
  });
});
