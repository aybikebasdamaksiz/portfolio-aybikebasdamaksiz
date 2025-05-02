import { useState, useEffect } from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import contentEn from "./data/content-en.json";
import contentTr from "./data/content-tr.json";
import ContactForm from "./components/ContactForm";

function App() {
  // language settings
  const [language, setLanguage] = useState("tr");

  // Dark mode durumu: localStorage'dan başlatılıyor
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // seçim
  const content = language === "tr" ? contentTr : contentEn;

  //  Dark mode class kontrolü ve localStorage kaydı
  useEffect(() => {
    const root = document.documentElement; // <html> etiketi
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="bg-white text-black dark:bg-[#252128] dark:text-white transition-colors duration-300 min-h-screen py-6 px-4 sm:px-6">
          <div className="w-full max-w-[1100px] mx-auto">
            <Header />
            <Hero content={content.hero} />
            <Skills content={content.skills} />
            <div className="border-t border-[BAB2E7] dark:border-gray-700 my-8" />
            <Profile content={content.profile} />
            <div className="border-t border-[BAB2E7] dark:border-gray-700 my-8" />
            <Projects content={content.projects} />
            <Contact content={content.contact} />
            <ContactForm />
            <Footer content={content.footer} />
          </div>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
