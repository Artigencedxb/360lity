"use client";
import Sidebar from "@/common/Sidebar";
import React from "react";
import Protected from "./Protected";
import { Toaster } from "sonner";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Protected>
      <Toaster position="top-right" />
      <div className="relative h-screen flex w-full">
        <Sidebar />
        <div className="ml-64 p-12 w-full">{children}</div>
      </div>
    </Protected>
  );
};

export default AdminLayout;
