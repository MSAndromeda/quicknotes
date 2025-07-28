import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => setTheme((prev) => !prev);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <header className="p-4 shadow-md bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" aria-label="App title">
          Notes App
        </h1>
        <button
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}
