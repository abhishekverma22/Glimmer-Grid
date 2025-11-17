import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const checkUserDetailsFromLocalStorage = () => {
    const response = localStorage.getItem("user");
    return response ? JSON.parse(response) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = checkUserDetailsFromLocalStorage();
    if (details && email === details.email && password === details.password) {
      navigate(
        details.role === "admin" ? "/admin-dashboard" : "/user-dashboard"
      );
    } else {
      alert("Wrong email or password");
    }
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };
  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${
        !theme
          ? "bg-gray-900"
          : "bg-linear-to-br from-slate-200 via-green-50 to-slate-200"
      }`}
    >
      <motion.div
        className={`w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-500 ${
          !theme ? "bg-gray-800" : "bg-white"
        }`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Hero Section */}
        <motion.div
          className={`md:w-1/2 flex flex-col items-center justify-center p-4 md:p-12 gap-4 md:gap-6 relative overflow-hidden transition-colors duration-500 ${
            !theme
              ? "bg-linear-to-br from-black via-gray-900 to-gray-800" // Dark mode
              : "bg-linear-to-br from-indigo-600 to-purple-700" // Light mode
          }`}
          variants={itemVariants}
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full"
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-40 md:w-80 h-40 md:h-80 bg-white/5 rounded-full"
              animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo */}
          <motion.div
            className="relative z-10 w-28 sm:w-36 md:w-45"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: 0.2,
            }}
          >
            <img
              src={logo}
              alt="Glimmer-Grid Logo"
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Name */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black bg-linear-to-r from-yellow-400 via-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
              Glimmer-Grid
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="relative z-10 text-center text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md leading-relaxed font-light text-white/90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
          >
            Your Jewelry, Our Precision
          </motion.p>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className={`md:w-1/2 flex flex-col items-center justify-center p-4 md:p-12 gap-6 rounded-r-3xl transition-colors duration-500 relative overflow-hidden
    ${
      !theme
        ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 shadow-2xl border-l border-gray-800"
        : "bg-linear-to-br from-white via-gray-50 to-gray-100 shadow-2xl border-l border-gray-200"
    }`}
          variants={itemVariants}
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top-left circle */}
            <motion.div
              className="absolute -top-40 -left-40 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full"
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Bottom-right circle */}
            <motion.div
              className="absolute -bottom-40 -right-40 w-40 md:w-80 h-40 md:h-80 bg-white/5 rounded-full"
              animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* Heading */}
          <motion.div className="text-center space-y-2" variants={itemVariants}>
            <motion.h1
              className={`text-xl sm:text-2xl md:text-4xl font-bold transition-colors duration-500 ${
                !theme ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Manage Your Treasures
            </motion.h1>
            <motion.p
              className={`text-xs sm:text-sm md:text-base max-w-md leading-relaxed transition-colors duration-500 ${
                !theme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Effortless inventory management at your fingertips.
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-5"
            variants={itemVariants}
          >
            {/* Email */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileFocus={inputVariants}
            >
              <Mail
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
                  !theme ? "text-gray-300" : "text-gray-400"
                }`}
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 sm:py-3 rounded-xl outline-none text-sm sm:text-base transition-all duration-300 ${
                  !theme
                    ? "bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                }`}
                required
              />
            </motion.div>

            {/* Password */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileFocus={inputVariants}
            >
              <Lock
                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
                  !theme ? "text-gray-300" : "text-gray-400"
                }`}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-10 sm:pr-12 py-2 sm:py-3 rounded-xl outline-none text-sm sm:text-base transition-all duration-300 ${
                  !theme
                    ? "bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
                  !theme
                    ? "text-gray-300 hover:text-gray-100"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {showPassword ? (
                  <EyeOff className="w-4 sm:w-5 h-4 sm:h-5" />
                ) : (
                  <Eye className="w-4 sm:w-5 h-4 sm:h-5" />
                )}
              </button>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-600 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Login
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
