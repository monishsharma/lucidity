import App from "../App";
import { Navigate } from "react-router-dom";
import AdminPage from "../pages/admin";
import UserPage from "../pages/user";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/admin" />,  // Redirect root path to /admin
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
    // errorElement: <ErrorPage />,

  },
];

export default routes;