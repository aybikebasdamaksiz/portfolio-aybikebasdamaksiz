const Contact = ({ content }) => {
  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-[#252128] dark:text-[#AEBCCF] px-6 py-12 flex flex-col md:flex-row justify-between gap-10"
    >
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-start">
          {content.title}
        </h2>
        <a
          href={`mailto:${content.mail}`}
          className="text-gray-700 dark:text-[#AEBCCF] mb-6 mt-10 text-start flex items-center gap-2"
        >
          <span>👉</span>
          {content.mail}
        </a>
      </div>

      <div className="text-gray-700 flex flex-row gap-4 mt-20">
        <a
          href={content.personalBlogLink}
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 dark:text-[#AEBCCF]"
        >
          {content.personalBlog}
        </a>
        <a
          href={content.GitHubLink}
          target="_blank"
          rel="noreferrer"
          className="text-green-500"
        >
          {content.GitHub}
        </a>
        <a
          href={content.LinkedinLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          {content.Linkedin}
        </a>
      </div>
    </section>
  );
};

export default Contact;
