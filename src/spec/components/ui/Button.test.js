import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../app/components/ui/Button";

describe("Button UI Component", () => {
  test("renders a button with the default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-dark text-white");
    expect(button).toHaveAttribute("type", "button");
  });

  test("renders a small button", () => {
    render(<Button size="small">Small Button</Button>);
    const button = screen.getByText("Small Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-[24px]");
  });

  test("renders an alternate button", () => {
    render(<Button variant="alternate">Alternate Button</Button>);
    const button = screen.getByText("Alternate Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-white text-dark border border-dark");
  });

  test("calls the onClick function when the button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('renders a button with a "submit" type', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });
});
