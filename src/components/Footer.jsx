const Footer = ({ content }) => {
  return (
    <footer className="px-6 py-4 text-center border-t text-gray-500 dark:text-gray-400">
      <p>{content.copyright}</p>
    </footer>
  );
};

export default Footer;
