import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  it("should render without crashing", () => {
    render(<Button>Test Button</Button>);
  });

  it("should apply motion animation properties", () => {
    const { container } = render(<Button>Test Button</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveStyle("opacity: 0");
  });

  it("should apply the correct Tailwind CSS classes", () => {
    const { container } = render(<Button>Test Button</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveClass(
      "text-lg py-2.5 sm:py-3 px-6 shadow-lg duration-500 border-0 bg-primary hover:bg-secondary text-dark"
    );
  });

  it("should apply the correct Tailwind CSS classes", () => {
    const { container } = render(<Button>Test Button</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveClass(
      "text-lg py-2.5 sm:py-3 px-6 shadow-lg duration-500 border-0 bg-primary hover:bg-secondary text-dark"
    );
  });

  it("should call onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );

    const button = getByText("Click me");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should render children correctly", () => {
    const { getByText } = render(<Button>Test Text</Button>);
    const buttonText = getByText("Test Text");
    expect(buttonText).toBeInTheDocument();
  });
});
