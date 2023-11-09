import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../app/components/Footer";

const mockNavLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Resume", href: "/assets/pdf/SamPrestonResumeNov2023.pdf" },
];

describe("Footer Component", () => {
  jest.mock("../../app/components/NavBar", () => ({
    navLinks: mockNavLinks,
  }));
  test("renders the footer links", () => {
    render(<Footer />);

    mockNavLinks.forEach(({ name, href }) => {
      const link = screen.getByText(name);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });

  test("renders the alternate logo", () => {
    render(<Footer />);
    const logo = screen.getByText("S");
    expect(logo).toBeInTheDocument();
  });
});
