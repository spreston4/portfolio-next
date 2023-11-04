import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface SkillCardProps {
  skill: string;
  src: string | StaticImport;
}

const SkillCard = ({ skill, src }: SkillCardProps) => {
    const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex flex-col items-center gap-y-2 flex-nowrap text-dark-grey">
      <Image src={src} alt={skill} height={100} className="flex-shrink-0"/>
      <p className="body-small whitespace-nowrap">{skill}</p>
    </div>
  );
};

export default SkillCard;
