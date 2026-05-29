import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../pages/Login/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { StudentPage } from "../pages/Student/StudentPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/student/:id",
    element: <StudentPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
