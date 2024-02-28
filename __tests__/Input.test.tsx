import React from "react";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

const inputProps = {
  inputLabel: "Test Label",
  labelFor: "testInput",
  inputType: "text",
  inputId: "testInput",
  inputName: "testInput",
  placeholderText: "Enter text",
  ariaLabelName: "Test Aria Label",
};

describe("Input component", () => {
  it("should render Input component with the provided props", () => {
    render(<Input {...inputProps} />);

    const labelElement = screen.getByText(inputProps.inputLabel);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", {
      name: inputProps.ariaLabelName,
    });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", inputProps.inputType);
    expect(inputElement).toHaveAttribute("id", inputProps.inputId);
    expect(inputElement).toHaveAttribute("name", inputProps.inputName);
    expect(inputElement).toHaveAttribute(
      "placeholder",
      inputProps.placeholderText
    );
    expect(inputElement).toHaveAttribute(
      "aria-label",
      inputProps.ariaLabelName
    );
  });
});
