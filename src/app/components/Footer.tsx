import Logo from "./ui/Logo";
import Link from "./ui/Link";
import * as Icon from "react-feather";

const Footer = () => {
  return (
    <div className="container-thin bg-dark flex flex-row items-center justify-between min-w-full" id="footer">
      <div className="flex gap-x-10">
        <Link href="#about" className="text-white">
          About
        </Link>
        <Link href="#services" className="text-white">
          Portfolio
        </Link>
      </div>
      <Logo variant="alternate" />
      <div className="flex gap-x-10">
        <Link href="#about" className="text-white">
          Services
        </Link>
        <Link href="#services" className="text-white">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Footer;
