import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "regular";
  variant?: "primary" | "alternate";
}

const Button = ({
  children,
  onClick,
  size = "regular",
  variant = "primary",
}: ButtonProps) => {
  const variants = {
    primary: "bg-dark text-white",
    alternate: "bg-white text-dark border border-dark",
  };

  const px = size === "regular" ? "px-[36px]" : "px-[24px]";

  return (
    <button
      className={`py-[12px] ${px} m-[10px] body-medium font-bold ${variants[variant]} hover-scale`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
