import { render, screen } from "@testing-library/react";
import NumCard from "../../../app/components/ui/NumCard";

describe("NumCard UI Component", () => {
  test("renders the number and text correctly", () => {
    render(
      <NumCard
        num="42"
        text="Answer to the Ultimate Question of Life, the Universe, and Everything"
      />
    );
    const numberElement = screen.getByText("42");
    const textElement = screen.getByText(
      "Answer to the Ultimate Question of Life, the Universe, and Everything"
    );
    expect(numberElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test("applies the correct styles to the number and text", () => {
    render(<NumCard num="7" text="Lucky Number" />);
    const numberElement = screen.getByText("7");
    const textElement = screen.getByText("Lucky Number");
    expect(numberElement).toHaveClass("heading-large text-prim-light");
    expect(textElement).toHaveClass(
      "body-large font-bold text-white text-center"
    );
  });
});
