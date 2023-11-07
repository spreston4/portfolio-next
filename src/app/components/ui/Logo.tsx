interface LogoProps {
  className?: string;
  variant?: "primary" | "alternate";
}

const Logo = ({ className, variant = "primary" }: LogoProps) => {
  const color = variant === "primary" ? "text-dark" : "text-white";
  return (
    <div className={`font-inter font-semibold flex ${className}`}>
      <span className={`block ${color} text-[40px] -translate-y-1`}>S</span>
      <span className=" block text-prim-dark text-[45px] translate-y-1.5 -translate-x-1.5">
        P
      </span>
    </div>
  );
};

export default Logo;
