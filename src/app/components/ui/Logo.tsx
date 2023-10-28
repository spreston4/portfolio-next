interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`font-inter font-semibold flex ${className}`}>
      <span className="block text-dark text-[40px] -translate-y-1">S</span>
      <span className=" block text-red text-[45px] translate-y-1.5 -translate-x-1.5">
        P
      </span>
    </div>
  );
};

export default Logo;
