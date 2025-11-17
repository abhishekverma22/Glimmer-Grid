import React from "react";
import { motion } from "framer-motion";
import Header from "../components/shared/Header";
import Sidebar from "../components/UserDashboard/Sidebar";
import MainContent from "../components/UserDashboard/MainContent";
import { useTheme } from "../context/ThemeContext";

const UserDashboard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme
          ? "bg-linear-to-b from-indigo-50 via-white to-green-50"
          : "bg-linear-to-b from-gray-900 via-gray-800 to-gray-900"
      }`}
    >
      {/* Header: fixed at top */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 1 }}
        className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
          theme
            ? "bg-[#A1BC98] border-b border-gray-200 shadow-sm"
            : "bg-gray-900 border-b border-gray-700 shadow-lg"
        }`}
      >
        <Header />
      </motion.header>

      {/* Layout: flex container */}
      <div className="flex overflow-hidden">
        {/* Sidebar: fixed */}
        <motion.aside
          initial={{ x: -64, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 25,
            delay: 0.2,
            duration: 1.2,
          }}
          className={`fixed top-20 left-0 w-64 h-[calc(100vh-80px)] pt-5 overflow-hidden transition-colors duration-500 ${
            theme
              ? "bg-linear-to-l from-[#F8EDE3] via-white to-[#F8EDE3] border-r border-gray-200 shadow-sm"
              : "bg-linear-to-l from-gray-900 via-gray-800 to-gray-900 border-r border-gray-700"
          }`}
        >
          <Sidebar />
        </motion.aside>

        {/* Main Content: scrollable */}
        <motion.main
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.4,
            duration: 1,
          }}
          className={`flex-1 ml-64 h-[calc(100vh-80px)] overflow-auto py-5 px-4 transition-colors duration-500 ${
            theme
              ? "bg-linear-to-bl from-[#f3cdad] via-[#f7e9d9] to-[#ead5f1]"
              : "bg-linear-to-b from-[#352F44] via-[#5C5470] to-[#352F44] text-gray-100"
          }`}
        >
          <MainContent />
        </motion.main>
      </div>
    </div>
  );
};

export default UserDashboard;
