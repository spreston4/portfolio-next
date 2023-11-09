import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "regular";
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "alternate";
}

const Button = ({
  children,
  disabled = false,
  onClick,
  size = "regular",
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const variants = {
    primary: disabled ? "bg-dark-grey text-white cursor-not-allowed" : "bg-dark text-white hover-scale",
    alternate: disabled ? "bg-dark-grey text-white border border-grey cursor-not-allowed" : "bg-white text-dark border border-dark hover-scale",
  };

  const px = size === "regular" ? "px-[36px]" : "px-[24px]";

  return (
    <button
      className={`py-[16px] sm:py-[12px] ${px} body-large sm:body-medium font-bold truncate ${variants[variant]}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
