import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing.tsx";
import Register from "../pages/Register.tsx";
import Login from "../pages/Login.tsx";
import NotFound from "../pages/NotFound.tsx";
import PublicRoute from "./visibility/PublicRoute.tsx";
import PrivateRoute from "./visibility/PrivateRoute.tsx";
import Home from "../pages/Home.tsx";
import Profile from "../pages/Profile.tsx";
const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={createRouter} />;
};

export default Router;
