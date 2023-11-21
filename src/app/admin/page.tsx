import Header from "@/common/Header";
import Login from "@/components/Login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "360lity - Admin"
}

const AdminLoginpage = () => {
  return (
    <div className="flex items-center w-full justify-center h-screen">
      <Login />
    </div>
  );
};

export default AdminLoginpage;
