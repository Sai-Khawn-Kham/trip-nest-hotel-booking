import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/PublicLayout";
import NotFound from "../components/NotFoundPage";
import authRoute from "./authRoute";
import publicRoute from "./publicRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <PublicLayout />,
      errorElement: <NotFound />,
      children: [...publicRoute],
   },
   ...authRoute,
]);

export default router;
