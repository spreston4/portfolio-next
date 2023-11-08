import ProjectCard, { ProjectCardProps } from "./ui/ProjectCard";
import cf from "../../../public/assets/images/projects/CampFinder.png";
import of from "../../../public/assets/images/projects/OrderFood.png";
import ny from "../../../public/assets/images/projects/NytReview.png";

const Portfolio = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Camp Finder",
      description: "Plan a camping trip.",
      image: cf,
      url: "https://spreston4.github.io/camp-finder/",
    },
    {
      title: "Order Food",
      description: "Order food from a mock resturant.",
      image: of,
      url: "https://spreston4.github.io/order-food/",
    },
    {
      title: "NYT Book Review",
      description: "Browse NYT Best Seller reviews.",
      image: ny,
      url: "https://spreston4.github.io/nyt-book-review/",
    },
  ];
  return (
    <div id="portfolio">
      <div className="container-mobile md:container bg-white flex flex-col items-center">
        <h2 className="heading-small text-dark mb-6">Portfolio</h2>
        <p className="body-large sm:body-medium">Explore some examples of my work.</p>
      </div>
      <div className="container-mobile md:container bg-white">
        <div className=" flex items-center justify-evenly flex-wrap gap-12">
          {projects.map(({ title, description, image, url }) => (
            <ProjectCard
              title={title}
              description={description}
              image={image}
              url={url}
              key={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
