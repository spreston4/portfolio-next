import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../../app/components/ContactForm";

describe("ContactForm Component", () => {
  test("renders the contact form with input fields", () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText("Name*");
    const emailInput = screen.getByPlaceholderText("Email*");
    const phoneInput = screen.getByPlaceholderText("Phone Number");
    const messageInput = screen.getByPlaceholderText("Message*");
    const submitButton = screen.getByText("Send Message");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("validates input fields correctly", () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText("Name*");
    const emailInput = screen.getByPlaceholderText("Email*");
    const phoneInput = screen.getByPlaceholderText("Phone Number");
    const messageInput = screen.getByPlaceholderText("Message*");
    const submitButton = screen.getByText("Send Message");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message." },
    });

    expect(submitButton).toBeEnabled();

    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(phoneInput, { target: { value: "" } });
    fireEvent.change(messageInput, { target: { value: "" } });

    expect(submitButton).toBeDisabled();
  });
});
