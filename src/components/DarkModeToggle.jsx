import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <div className="w-11 h-6 bg-indigo-500 rounded-full peer dark:bg-gray-600 peer-checked:bg-yellow-500 transition-colors duration-300"></div>
      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-transform duration-300"></div>
      <span className="ml-3 text-sm font-bold text-gray-500 dark:text-gray-500">
        {darkMode ? "DARK MODE" : "LIGHT MODE"}
      </span>
    </label>
  );
}
