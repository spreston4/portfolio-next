import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../../../app/components/ui/Input";

describe("Input UI Component", () => {
  test("renders an input field with default props", () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "input");
  });

  test("renders an input field with an error", () => {
    render(<Input placeholder="Enter text" error="This is an error" />);
    const errorElement = screen.getByText("This is an error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass("body-error");
  });

  test("renders a textarea field with default props", () => {
    render(<Input placeholder="Enter text" type="textarea" />);
    const textareaElement = screen.getByPlaceholderText("Enter text");
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveStyle("resize:none");
  });

  test("calls the onChange function when input is changed", () => {
    const onChangeMock = jest.fn();
    render(<Input placeholder="Enter text" onChange={onChangeMock} />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "New text" } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
  });

  test("calls the onBlur function when input is blurred", () => {
    const onBlurMock = jest.fn();
    render(<Input placeholder="Enter text" onBlur={onBlurMock} />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.blur(inputElement);
    expect(onBlurMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
