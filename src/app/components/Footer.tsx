import Logo from "./ui/Logo";
import Link from "./ui/Link";
import { navLinks, NavLinkObject } from "./NavBar";

const Footer = () => {
  const halfLinks = Math.ceil(navLinks.length / 2);
  const firstHalf = navLinks.slice(0, halfLinks);
  const secondHalf = navLinks.slice(halfLinks, navLinks.length);

  const linkMapDisplay = (links: NavLinkObject[]) => {
    return (
      <div className="flex gap-x-10">
        {links.map(({ name, href }) => (
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
    );
  };
  return (
    <div
      className="container-thin bg-dark flex flex-row items-center justify-center gap-x-24 min-w-full"
      id="footer"
    >
      {linkMapDisplay(firstHalf)}
      <a href="#">
        <Logo variant="alternate" className="hover-translate" />
      </a>
      {linkMapDisplay(secondHalf)}
    </div>
  );
};

export default Footer;
