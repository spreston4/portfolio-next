import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../../app/components/NavBar";

describe("NavBar Component", () => {
  it("renders the navigation links and button", () => {
    render(<NavBar />);

    const navLinks = ["About", "Skills", "Portfolio", "Resume"];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    expect(screen.getByText("Let's Talk")).toBeInTheDocument();
  });
});
