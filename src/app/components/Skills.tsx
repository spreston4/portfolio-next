import SkillCard from "./ui/SkillCard";
import js from "../../../public/assets/images/logos/JavaScript.png";
import ts from "../../../public/assets/images/logos/TypeScript.png";
import rt from "../../../public/assets/images/logos/React.png";
import nxt from "../../../public/assets/images/logos/Next.png";
import node from "../../../public/assets/images/logos/Node.png";
import ror from "../../../public/assets/images/logos/RubyOnRails.png";
import html from "../../../public/assets/images/logos/HTML.png";
import css from "../../../public/assets/images/logos/Css.png";
import tw from "../../../public/assets/images/logos/Tailwind.png";
import mui from "../../../public/assets/images/logos/MaterialUI.png";
import sql from "../../../public/assets/images/logos/SQL.png";

const Skills = () => {
  const skillBank = [
    { skill: "JavaScript", image: js },
    { skill: "TypeScript", image: ts },
    { skill: "React", image: rt },
    { skill: "Next.js", image: nxt },
    { skill: "Node.js", image: node },
    { skill: "Ruby on Rails", image: ror },
    { skill: "SQL", image: sql },
    { skill: "HTML 5", image: html },
    { skill: "CSS 3", image: css },
    { skill: "Tailwind CSS", image: tw },
    { skill: "Material-UI", image: mui },
  ];

  const skillCardsDisplay = (hidden: boolean) => {
    return (
      <ul
        className="flex flex-row items-center justify-center gap-x-24 flex-nowrap animate-infinite-scroll [&_img]:max-w-none"
        aria-hidden={hidden}
      >
        {skillBank.map(({ skill, image }) => (
          <li key={skill}>
            <SkillCard skill={skill} src={image} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className="container bg-white text-dark flex flex-col items-center overflow-hidden"
      id="skills"
    >
      <h2 className="heading-small mb-6">Core Skills</h2>
      <div className="mt-8 flex flex-row flex-nowrap gap-x-24 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {skillCardsDisplay(false)}
        {skillCardsDisplay(true)}
      </div>
    </div>
  );
};

export default Skills;
