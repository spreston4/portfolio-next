import Button from "./ui/Button";
import Image from "next/image";
import Headshot from "../../../public/assets/images/headshot_blank.png";
import HeadWhite from "../../../public/assets/images/headshot_blank_white.png";

const Hero = () => {
  return (
    <div className="container bg-pink flex justify-between pb-0">
      <div className="w-2/5 mb-10">
        <p className="body-xlarge text-dark">Full Stack Developer</p>
        <p className="heading-medium text-dark">Hi There, I&apos;m</p>
        <h1 className="heading-medium text-red">Sam Preston</h1>
        <p className="body-medium text-dark">
          Welcome to my portfolio! I create captivating user experiences.
          Explore my work and let&apos;s create something extraordinary
          together.
        </p>
        <div className="mt-20 flex items-center justify-start gap-x-4">
          <Button>Get in Touch</Button>
          <Button variant="alternate">Portfolio</Button>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className="relatve">
          <Image src={Headshot} alt="Sam Preston" height={520} width={460} className="relative z-10 mr-16"/>
          {/* <Image src={HeadWhite} alt="Sam Preston" height={520} width={460} className="absolute z-5 bottom-[245px] translate-x-3 scale-105" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;