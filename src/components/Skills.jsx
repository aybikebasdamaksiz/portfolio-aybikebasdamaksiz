const Skills = ({ content }) => {
  return (
    <section id="skills" className="dark:bg-[#252128]">
      <h2 className="text-5xl dark:text-[#AEBCCF] font-semibold mb-8 text-left p-4">
        {content.title}
      </h2>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
        {content.skillsList.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-[#252128] p-4 text-left">
            <p className="text-3xl font-bold text-indigo-800 dark:text-[#B7AAFF]  mb-4">
              {skill.name}
            </p>
            <p className="text-xl font-light text-gray-800 dark:text-white dark:text-gray-300">
              {content.skillsListItem[index]?.item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
