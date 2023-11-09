import { render, screen } from "@testing-library/react";
import Link from "../../../app/components/ui/Link";

describe("Link UI Component", () => {
  test("renders a link with the provided text and href", () => {
    const linkText = "Click me";
    const linkHref = "/example";
    render(<Link href={linkHref}>{linkText}</Link>);
    const linkElement = screen.getByText(linkText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", linkHref);
  });

  test("adds custom class to the link", () => {
    const customClass = "custom-class";
    render(
      <Link href="/example" className={customClass}>
        Link Text
      </Link>
    );
    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toHaveClass(customClass);
  });

  test('renders an external link with target="_blank"', () => {
    render(
      <Link href="/external" external>
        External Link
      </Link>
    );
    const linkElement = screen.getByText("External Link");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  test('renders a standard link with target="_self"', () => {
    render(<Link href="/internal">Internal Link</Link>);
    const linkElement = screen.getByText("Internal Link");
    expect(linkElement).toHaveAttribute("target", "_self");
  });
});
