import Button from "./ui/Button";
import Image from "next/image";
import Headshot from "../../../public/assets/images/headshot_blank.png";

const Hero = () => {
  return (
    <div
      className="container flex justify-center md:justify-between pb-0"
      id="hero"
    >
      <div className="full md:w-2/5 flex flex-col items-center md:items-start mb-10">
        <p className="body-xlarge text-dark">Full Stack Developer</p>
        <p className="heading-medium text-dark">Hi There, I&apos;m</p>
        <h1 className="heading-medium text-prim-dark">Sam Preston</h1>
        <p className="body-large sm:body-medium text-dark w-[400px] text-center md:text-left">
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
      <div className="hidden md:flex md:flex-col md:justify-end md:w-3/5">
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
