import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import { Toaster } from "react-hot-toast";
import PublicContainer from "./PublicContainer";

const PublicLayout = () => {
   return (
      <>
         <PublicHeader />
         <PublicContainer>
            <Outlet />
         </PublicContainer>
         <PublicFooter />
         <Toaster position="top-right" />
      </>
   );
};

export default PublicLayout;
