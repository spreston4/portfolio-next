import Button from "./ui/Button";
import Link from "./ui/Link";
import Logo from "./ui/Logo";

const NavBar = () => {
  return (
    <div className="container bg-pink relative">
      <div className="flex flex-row items-center justify-between relative z-10">
        <Logo />

        <div className="flex flex-row items-center gap-x-4">
          <Link href="#about">About</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Services</Link>
          <Link href="#">Blog</Link>
        </div>

        <Button size="small">Let&apos;s Talk</Button>
      </div>
      <div className="w-[248px] h-[55px] bg-red rounded-br-full rounded-bl-full z-0 absolute -top-0 left-[27%]"></div>
    </div>
  );
};

export default NavBar;
