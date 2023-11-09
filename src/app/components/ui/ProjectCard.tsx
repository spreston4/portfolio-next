import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export interface ProjectCardProps {
  description: string;
  image: string | StaticImport;
  title: string;
  url: string;
}

const ProjectCard = ({
  description,
  image,
  title,
  url,
}: ProjectCardProps) => {
  return (
    <div className="w-[450px] sm:w-[325px] relative">
      <Image src={image} alt={title} className="mb-4" />
      <div className="flex items-end justify-between">
        <div>
          <h4 className="body-xlarge font-bold text-dark">{title}</h4>
          <p className="body-large sm:body-small text-dark-grey">{description}</p>
        </div>
        <a href={url} target="_blank">
          <div className="icon-bg-mobile sm:icon-bg-large bg-prim-dark">
            <ArrowUpRight className="text-white h-[44px]" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
