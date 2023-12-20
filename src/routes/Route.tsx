import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing.tsx";
import Register from "../pages/Register.tsx";
import Login from "../pages/Login.tsx";
import NotFound from "../pages/NotFound.tsx";
const createRouter = createBrowserRouter([
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
    path: "*",
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={createRouter} />;
};

export default Router;
