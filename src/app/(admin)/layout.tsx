import Sidebar from "@/common/Sidebar";
import React from "react";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative h-screen flex w-full">
      <Sidebar />
      <div className="ml-64 p-12 w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
