import projectImage from "../assets/images/project/project.png";
import project1Image from "../assets/images/project/project1.png";
import project2Image from "../assets/images/project/project2.png";

const Projects = ({ content }) => {
  const projectImages = [projectImage, project1Image, project2Image];

  return (
    <section id="projects" className="px-6 py-12 bg-white dark:bg-[#252128]">
      <h2 className="text-5xl dark:text-[#AEBCCF] font-semibold mb-8 text-left">
        {content.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {content.projectsList.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#252128] rounded overflow-hidden"
          >
            <img
              src={projectImages[index]}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-indigo-800 text-xl font-semibold mb-2 dark:text-[#B7AAFF]">
                {project.name}
              </h3>
              <p className="mb-4 text-gray-600   dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6 min-h-[96px] items-center">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center justify-center h-10 text-center px-4 bg-white text-[#8F88FF] dark:bg-[#383838] dark:border-[#8F88FF] rounded-md border border-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-800 dark:text-indigo-400 underline"
                >
                  {project.linkText}
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-800 dark:text-indigo-400 underline"
                >
                  {project.linkText1}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
