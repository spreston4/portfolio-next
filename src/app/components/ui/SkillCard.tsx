import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface SkillCardProps {
  skill: string;
  src: string | StaticImport;
}

const SkillCard = ({ skill, src }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2 flex-nowrap">
      <Image src={src} alt={skill} height={100} className="flex-shrink-0"/>
      <p className="body-small text-dark-grey whitespace-nowrap">{skill}</p>
    </div>
  );
};

export default SkillCard;
