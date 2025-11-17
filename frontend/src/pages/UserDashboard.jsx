import React from "react";
import { motion } from "framer-motion";
import Header from "../components/shared/Header";
import Sidebar from "../components/UserDashboard/Sidebar";
import MainContent from "../components/UserDashboard/MainContent";
import { useTheme } from "../context/ThemeContext";

const UserDashboard = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header: fixed at top */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 1 }}
        className={`sticky top-0 z-50 w-full bg-white shadow-sm border-b ${
          theme ? "border-gray-200" : "border-gray-600 shadow-none"
        }`}
      >
        <Header />
      </motion.header>

      {/* Layout: flex container */}
      <div className="flex overflow-hidden">
        {/* Sidebar: fixed */}
        <motion.aside
          initial={{ x: -64, opacity: 0 }}  // smaller offset to prevent scrollbar
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 25,
            delay: 0.2,
            duration: 1.2,
          }}
          className={`fixed top-20 left-0 w-64 h-[calc(100vh-80px)] pt-5 border-r overflow-hidden ${
            theme ? "bg-slate-100 border-gray-200" : "bg-gray-800 border-gray-600"
          }`}
        >
          <Sidebar />
        </motion.aside>

        {/* Main Content: scrollable */}
        <motion.main
          initial={{ x: 50, opacity: 0 }} // smaller offset
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.4,
            duration: 1,
          }}
          className={`flex-1 ml-64 h-[calc(100vh-80px)] overflow-auto py-5 px-4 ${
            theme ? "bg-[#fffff5]" : "bg-[#393E46] text-gray-100"
          }`}
        >
          <MainContent />
        </motion.main>
      </div>
    </div>
  );
};

export default UserDashboard;
