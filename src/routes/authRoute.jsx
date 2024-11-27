import { lazy } from "react";

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"))
const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage"))

const authRoute = [
   {
      path: "register",
      element: <RegisterPage />,
   },
   {
      path: "login",
      element: <LoginPage />,
   },
];

export default authRoute;
