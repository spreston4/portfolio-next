import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";
import ph from "../../../../public/assets/images/projects/placeholder.jpg";

export interface ProjectCardProps {
  description: string;
  image?: string | StaticImport;
  title: string;
  url: string;
}

const ProjectCard = ({
  description,
  image = ph,
  title,
  url,
}: ProjectCardProps) => {
  return (
    <div className="w-[300px] relative">
      <Image src={image} alt={title} width={300} className="mb-4" />
      <div className="flex items-end justify-between">
        <div>
          <h4 className="body-xlarge font-bold text-dark">{title}</h4>
          <p className="body-small text-dark-grey">{description}</p>
        </div>
        <a href={url} target="_blank">
          <div className="icon-bg-large bg-red">
            <ArrowUpRight className="text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
