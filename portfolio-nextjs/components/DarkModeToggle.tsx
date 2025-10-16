"use client";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark") setDarkMode(true);
    if (stored === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;
