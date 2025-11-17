import {
  Layers,
  ShoppingBag,
  Gift,
  ClipboardList,
  User,
  LogOut,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {
  const linkItems = [
    { title: "Stock", icon: <Layers /> },
    { title: "Sale", icon: <ShoppingBag /> },
    { title: "Scheme", icon: <Gift /> },
    { title: "Ledger", icon: <ClipboardList /> },
    { title: "User Details", icon: <User /> },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    const userRes = confirm("Are you sure?");
    userRes ? navigate("/") : "";
  };



  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Sidebar Links */}
      <div></div>

      {/* Logout button */}
      <div className=" flex items-center  w-full bg-red-400  rounded-lg">
        <button
          className="flex items-center justify-center p-3 text-[20px] gap-5 font-[550] text-white  w-full cursor-pointer "
          onClick={handleLogout}
        >
          {" "}
          <LogOut size={23} /> Logut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
