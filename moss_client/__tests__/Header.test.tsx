import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: jest.fn().mockImplementation((props) => <img {...props} />),
}));

const mockWindowLocationAssign = (url: string) => {
  Object.defineProperty(window, "location", {
    value: {
      assign: jest.fn((newUrl) => {
        window.location.href = newUrl;
      }),
    },
    writable: true,
  });

  window.location.assign(url);
};

describe("Header component", () => {
  it("should render the logo correctly", () => {
    render(<Header children={null} />);

    const logoElement = document.querySelector("img");

    expect(logoElement).toBeInTheDocument();
  });

  it("should render children correctly", () => {
    const children = (
      <>
        <h1>Children</h1>
      </>
    );

    render(<Header children={children} />);

    const children1 = document.querySelector("h1");

    expect(children1).toBeInTheDocument();
  });

  it("should redirect to homepage when logo is clicked", () => {
    render(<Header children={null} />);

    const logoElement = screen.getByAltText("Mooz Logo");

    mockWindowLocationAssign("/");

    fireEvent.click(logoElement);

    expect(window.location.assign).toHaveBeenCalledWith("/");
  });
});
