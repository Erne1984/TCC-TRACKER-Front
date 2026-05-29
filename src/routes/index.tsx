import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../pages/Login/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { StudentLayout } from "../pages/Student/StudentLayout";
import { StudentGroupsPage } from "../pages/Student/StudentGroupsPage";
import { StudentTasksPage } from "../pages/Student/StudentTasksPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

 {
    path: "/student/:id",
    element: <StudentLayout />,
    children: [
      {
        index: true,
        element: <StudentGroupsPage />,
      },
      {
        path: "groups",
        element: <StudentGroupsPage />,
      },
      {
        path: "tasks",
        element: <StudentTasksPage />,
      },
    ]
    },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
