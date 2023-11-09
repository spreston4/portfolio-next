import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../../app/components/About";

describe("About Component", () => {
  test("renders About Me section", () => {
    render(<About />);

    const titleElement = screen.getByText("About Me");
    expect(titleElement).toBeInTheDocument();
  });
});
