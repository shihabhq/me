import React, { useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarValues = {
    sidebarOpen,
    toggleSidebar,
  };

  return <SidebarContext value={sidebarValues}>{children}</SidebarContext>;
};

export default SidebarProvider;
