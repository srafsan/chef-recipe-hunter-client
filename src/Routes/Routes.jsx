import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import Details from "../pages/Details/Details";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "../Providers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
