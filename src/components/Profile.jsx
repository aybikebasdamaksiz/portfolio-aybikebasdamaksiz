const Profile = ({ content }) => {
  return (
    <section className="px-6 py-12">
      <h2 className="text-5xl dark:text-[#AEBCCF] font-semibold mb-8 text-left">
        {content.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 ">
        <h3 className="text-3xl font-semibold text-indigo-800 dark:text-[#B7AAFF] text-left">
          {content.title1}
        </h3>
        <h3 className="text-3xl font-semibold text-indigo-800 dark:text-[#B7AAFF] text-left md:col-span-2">
          {content.title2}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/*profile*/}
        <div className="text-left text-gray-700 dark:text-white dark:text-gray-300">
          <div className="grid grid-cols-2 gap-y-2">
            <span className="font-semibold">{content.description1}</span>
            <span>{content.description2}</span>

            <span className="font-semibold">{content.description3}</span>
            <span>{content.description4}</span>

            <span className="font-semibold">{content.description5}</span>
            <span>{content.description6}</span>

            <span className="font-semibold">{content.description7}</span>
            <span>{content.description8}</span>
          </div>
        </div>

        {/*about me*/}
        <div className="md:col-span-2 text-left dark:text-white">
          <p>{content.description9}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
