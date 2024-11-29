import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import { Toaster } from "react-hot-toast";
import Container from "../../../components/Container";

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />

      <Outlet />

      <PublicFooter />
      <Toaster position="top-right" />
    </>
  );
};

export default PublicLayout;
