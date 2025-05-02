import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <header className="pr-20">
      <div className="text-gray no-underline text-lg flex items-center justify-end gap-5 py-10">
        <DarkModeToggle /> {/* Dark mode toggle */}
        <span className="hidden md:block">|</span>
        <button
          onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
          className="ml-3 text-sm font-bold text-indigo-500 dark:text-gray-500"
        >
          {language === "tr" ? "ENGLISH" : "TÜRKÇE"}
        </button>
      </div>
      <div className="flex justify-end gap-10">
        <a href="#skills" className="text-gray-500 no-underline text-md p-3">
          {language === "tr" ? "Yetenekler" : "Skills"}
        </a>
        <a href="#projects" className="text-gray-500 no-underline text-md p-3">
          {language === "tr" ? "Projeler" : "Projects"}
        </a>
        <a
          href="#contact"
          className="text-indigo-500 no-underline text-md outline outline-offset-2 outline-1 outline-[#4731D3] p-3 rounded-md"
        >
          {language === "tr" ? "Beni işe al" : "Hire me"}
        </a>
      </div>
    </header>
  );
};

export default Header;
