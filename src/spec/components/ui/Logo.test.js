import { render, screen } from "@testing-library/react";
import Logo from "../../../app/components/ui/Logo";

describe("Logo UI Component", () => {
  test("renders the default logo with primary variant", () => {
    render(<Logo />);
    const primaryLogo = screen.getByText("S");
    expect(primaryLogo).toBeInTheDocument();
    expect(primaryLogo).toHaveClass("text-dark");
  });

  test("renders the logo with alternate variant", () => {
    render(<Logo variant="alternate" />);
    const alternateLogo = screen.getByText("S");
    expect(alternateLogo).toBeInTheDocument();
    expect(alternateLogo).toHaveClass("text-white");
  });
});
