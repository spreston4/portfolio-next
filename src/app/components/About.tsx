import NumCard from "./ui/NumCard";

const About = () => {
  return (
    <div className="container-thin bg-dark text-white pb-0" id="about">
      <div className="flex flex-col items-center justify-between gap-y-8 w-full">
        <h2 className="heading-small">About Me</h2>
        <p className="body-medium text-center">
          I&apos;m Sam Preston, a Full Stack Developer dedicated to crafting
          intuitive and visually stunning digital experiences. With 10+ years of
          professional problem solving, I transform ideas into functional and
          appealing applications. Let&apos;s collaborate and build the future
          together.
        </p>
        <div className="flex flex-row items-center justify-between gap-x-4 w-full">
          <NumCard num="3" text="Organizations Helped" />
          <NumCard num="10+" text="Years of Professional Problem Solving" />
          <NumCard num="2" text="Years of Development" />
        </div>
        <div className="w-[180px] h-[40px] rounded-tl-full rounded-tr-full bg-red"></div>
      </div>
    </div>
  );
};

export default About;
