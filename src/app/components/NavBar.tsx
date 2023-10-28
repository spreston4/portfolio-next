import Button from "./ui/Button";
import Link from "./ui/Link";
import Logo from "./ui/Logo";

const NavBar = () => {
  return (
    <div className="container bg-pink relative">
      <div className="flex flex-row items-center justify-between relative z-10">
        <Logo />

        <div className="flex flex-row items-center gap-x-4">
          <Link href="#">About</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Services</Link>
          <Link href="#">Blog</Link>
        </div>

        <Button size="small">Let&apos;s Talk</Button>
      </div>
      <div className="w-[150px] h-[150px] bg-red rounded-full z-0 absolute -top-[70px] left-[30%]"></div>
    </div>
  );
};

export default NavBar;
