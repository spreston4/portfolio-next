import Button from "./ui/Button";
import Image from "next/image";
import Headshot from "../../../public/assets/images/headshot_blank.png";
import HeadWhite from "../../../public/assets/images/headshot_blank_white.png";

const Hero = () => {
  return (
    <div className="container bg-pink flex justify-between pb-0" id="hero">
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
          <a href="#contact">
            <Button>Get in Touch</Button>
          </a>
          <a href="#portfolio">
            <Button variant="alternate">Portfolio</Button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end w-3/5">
        <Image
          src={Headshot}
          alt="Sam Preston"
          height={520}
          width={460}
          className="self-center"
        />
      </div>
    </div>
  );
};

export default Hero;
