import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";

const Theme = () => {
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-md max-w-md">
      <h2 className="text-center text-2xl font-semibold">Theme</h2>
      <p className="text-xl py-2">
        Dark Mode: {darkMode ? "Enabled" : "Disabled"}
      </p>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="justify-center flex text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Theme;
