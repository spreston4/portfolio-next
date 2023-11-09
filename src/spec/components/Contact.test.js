import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../../app/components/Contact";

describe("Contact Component", () => {
  test("renders Contact section", () => {
    render(<Contact />);

    const titleElement = screen.getByText("Get in Touch");
    expect(titleElement).toBeInTheDocument();

    const contactForm = screen.getByPlaceholderText("Name*");
    expect(contactForm).toHaveAttribute("type", "input");
  });
});
