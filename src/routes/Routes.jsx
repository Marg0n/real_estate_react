import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Root from "../pages/Root";
import Login from "../pages/Navbar/Login";
import Register from "../pages/Navbar/Register";
import EstateDetail from "../components/EstateDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/real_estate.json'),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/estate/:uid",
        element: <EstateDetail />,
        loader: () => fetch('/real_estate.json'),
      }
    ]
  },
]);