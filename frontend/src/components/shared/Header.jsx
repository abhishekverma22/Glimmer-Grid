import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Bell } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState({});
  const [notifications, setNotifications] = useState(3);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const getUserName = () => {
    const details = localStorage.getItem("user");
    if (details) {
      const data = JSON.parse(details);
      setUser(data);
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  useEffect(() => {
    const checkSize = () => {
      setIsSmallDevice(window.innerWidth < 640);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const displayName =
    isSmallDevice && user.name
      ? user.name.length > 8
        ? user.name.slice(0, 8) + "...."
        : user.name
      : user.name || "Guest";

  return (
    <header className="min-h-16 sm:min-h-20 shadow-lg w-full bg-slate-200 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
      <div
        id="left"
        className="flex items-center space-x-1 sm:space-x-2 md:space-x-3"
      >
        {/* logo */}
        <div id="logo" className="w-8 sm:w-10 md:w-12 lg:w-16 shrink-0">
          <img
            src={logo}
            alt="GlimmerGrid Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-16 w-full object-contain"
          />
        </div>
        <div className="hidden sm:block h-6 sm:h-8 md:h-10 w-px border border-gray-300 -ml-5"></div>
        {/* name and tagline */}
        <div id="nameAndTagline" className="text-center min-w-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl bg-linear-to-r from-yellow-600 via-amber-700 to-orange-600 bg-clip-text text-transparent drop-shadow-md font-medium truncate">
            GlimmerGrid
          </h1>
          <p className="text-[10px] sm:text-sm text-gray-500">
            Your Jewelry, Our Precision
          </p>
        </div>
      </div>

      <div
        id="right"
        className="flex items-center justify-center gap-2 sm:gap-3"
      >
        {/* user */}
        <div className="border border-gray-300 rounded-2xl bg-white/80 shadow-md px-2 sm:px-3 md:px-4 py-1 sm:py-1.5">
          <h2 className="capitalize text-xs sm:text-sm md:text-base">
            {user.role} :{" "}
            <span className="text-[14px] sm:text-[16px] uppercase text-gray-800">
              {displayName}
            </span>
          </h2>
        </div>

        {/* alert button */}
        <div className="relative">
          <button className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-10 lg:w-10 rounded-full bg-amber-50 border-2 border-gray-300 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-lg">
            <Bell className="text-amber-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          {/* Notification Count */}
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 sm:-top-1 sm:-right-1 md:-top-1.5 md:-right-1.5 lg:-top-2 lg:-right-2 inline-flex items-center justify-center px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full text-[8px] sm:text-[10px] md:text-xs font-bold bg-red-500 text-white min-w-4 sm:min-w-[18px] h-4 sm:h-5">
              {notifications}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
