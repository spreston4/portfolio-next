import Button from "./ui/Button";
import Link from "./ui/Link";

const NavBar = () => {
  return (
    <div className="container bg-pink relative">
      <div className="flex flex-row items-center justify-between relative z-10">
        <div className="font-inter font-semibold flex">
          <span className="block text-dark text-[40px] -translate-y-1">S</span>
          <span className=" block text-red text-[45px] translate-y-1.5 -translate-x-1.5">
            P
          </span>
        </div>
        <div>
          <div className="flex flex-row items-center gap-x-4">
            <Link href="#">About</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Services</Link>
            <Link href="#">Blog</Link>
          </div>
          
        </div>
        <div>
          <Button size="small">Let&apos;s Talk</Button>
        </div>
      </div>
      <div className="w-[150px] h-[150px] bg-red rounded-full z-0 absolute -top-[70px] left-[30%]"></div>
    </div>
  );
};

export default NavBar;
