import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import heroImage from "../assets/images/hero.jpg";

const Hero = ({ content }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <section className="flex flex-col items-start w-1/2">
        <h1 className="text-5xl dark:text-[#AEBCCF] font-bold text-gray-800">
          {content.titleLine1}
        </h1>
        <p className="mt-4 max-w-xl text-gray-600 dark:text-white">
          {content.description}
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="https://github.com/aybikebasdamaksiz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal mt-6 px-6 py-2 bg-indigo-800 text-white rounded-md dark:bg-[#E1E1FF] dark:text-[#383838] dark:border-[#E1E1FF]"
          >
            {content.hireMe}
          </a>
          <a
            href="https://github.com/aybikebasdamaksiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-normal mt-6 px-6 py-2 bg-white text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] rounded-md border border-indigo-800"
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            {content.GitHub}
          </a>

          <a
            href="https://www.linkedin.com/in/aybikeba%C5%9F/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-normal mt-6 px-6 py-2 bg-white text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] rounded-md border border-indigo-800"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            {content.Linkedin}
          </a>
        </div>
      </section>
      <img
        className="w-full md:w-1/2 mt-10 md:mt-0"
        src={heroImage}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
