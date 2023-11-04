import SkillCard from "./ui/SkillCard";
import js from "../../../public/assets/images/logos/JavaScript.png";
import ts from "../../../public/assets/images/logos/TypeScript.png";
import node from "../../../public/assets/images/logos/Node.png";
import ror from "../../../public/assets/images/logos/RubyOnRails.png";
import html from "../../../public/assets/images/logos/HTML.png";
import css from "../../../public/assets/images/logos/Css.png";
import tw from "../../../public/assets/images/logos/Tailwind.png";
import mui from "../../../public/assets/images/logos/MaterialUI.png"

const Skills = () => {
  const skillBank = [
    { skill: "JavaScript", image: js },
    { skill: "TypeScript", image: ts },
    { skill: "Node.js", image: node },
    { skill: "Ruby on Rails", image: ror},
    { skill: "HTML 5", image: html },
    { skill: "CSS 3", image: css },
    { skill: "Tailwind CSS", image: tw},
    { skill: "Material-UI", image: mui}
    ,
  ];
  return (
    <div className="container bg-white text-dark flex flex-col items-center" id="skills">
      <h2 className="heading-small mb-6">Core Skills</h2>
      <div className="flex flex-row items-center justify-evenly gap-x-14 gap-y-6 flex-wrap">
        {skillBank.map(({ skill, image }) => (
          <SkillCard skill={skill} src={image} key={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
