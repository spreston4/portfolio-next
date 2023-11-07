import Logo from "./ui/Logo";
import Link from "./ui/Link";
import { navLinks } from "./NavBar";
import * as Icon from "react-feather";

const Footer = () => {
  const halfLinks = Math.ceil(navLinks.length / 2);
  const firstHalf = navLinks.slice(0, halfLinks);
  const secondHalf = navLinks.slice(halfLinks, navLinks.length);
  return (
    <div
      className="container-thin bg-dark flex flex-row items-center justify-between min-w-full"
      id="footer"
    >
      <div className="flex gap-x-10">
        {firstHalf.map(({ name, href }) => (
          <Link
            href={href}
            key={name}
            external={name === "Resume"}
            className="text-white"
          >
            {name}
          </Link>
        ))}
      </div>
      <a href="#">
        <Logo variant="alternate" className="hover-translate" />
      </a>
      <div className="flex gap-x-10">
        {secondHalf.map(({ name, href }) => (
          <Link
            href={href}
            key={name}
            external={name === "Resume"}
            className="text-white"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
