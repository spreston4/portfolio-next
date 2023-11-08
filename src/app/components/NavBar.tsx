import Button from "./ui/Button";
import Link from "./ui/Link";
import Logo from "./ui/Logo";

export interface NavLinkObject {
  name: string;
  href: string;
}

export const navLinks: NavLinkObject[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Resume", href: "/assets/pdf/SamPrestonResumeNov2023.pdf" },
];

const NavBar = () => {
  return (
    <div className="container-mobile sm:container relative" id="nav">
      <div className="w-full flex flex-row items-center justify-center sm:justify-between relative z-10">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="flex flex-row items-center justify-center gap-x-4 md:gap-x-10 text-dark pt-10 sm:pt-0">
          {navLinks.map(({ name, href }) => (
            <Link href={href} key={name} external={name === "Resume"}>
              {name}
            </Link>
          ))}
        </div>
        <a href="#contact" className="hidden sm:block">
          <Button size="small">Let&apos;s Talk</Button>
        </a>
      </div>
      <div className="w-[248px] h-[55px] bg-prim-dark rounded-br-full rounded-bl-full z-0 absolute -top-0 left-[27%]"></div>
    </div>
  );
};

export default NavBar;
