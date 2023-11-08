import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "regular";
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "alternate";
}

const Button = ({
  children,
  onClick,
  size = "regular",
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const variants = {
    primary: "bg-dark text-white",
    alternate: "bg-white text-dark border border-dark",
  };

  const px = size === "regular" ? "px-[36px]" : "px-[24px]";

  return (
    <button
      className={`py-[16px] sm:py-[12px] ${px} body-large sm:body-medium font-bold truncate ${variants[variant]} hover-scale`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
