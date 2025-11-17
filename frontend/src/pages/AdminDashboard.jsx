import React from "react";
import Header from "../components/shared/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";
import MainContent from "../components/AdminDashboard/MainContent";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
        <Header />
      </header>

      <div className="flex ">
        {/* Fixed Sidebar */}
        <aside className="fixed top-20 left-0 w-64 h-[calc(100vh-80px)] bg-white pt-5 border-r border-gray-200 overflow-hidden">
          <Sidebar />
        </aside>

        {/* Scrollable Main Content */}
        <main className="flex-1 ml-64 h-[calc(100vh-80px)] overflow-auto py-5 px-2">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
