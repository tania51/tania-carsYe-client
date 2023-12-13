import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddProducts from "../Pages/AddProducts";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../components/AllProducts/BrandProducts";
import Details from "../components/Details";
import MyCart from "../Pages/MyCart/MyCart";
import Update from "../components/Update/Update";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/addProduct",
          element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },
        {
          path: "/brandProducts/:brandName",
          element: <BrandProducts></BrandProducts>,
          loader: ({params}) => fetch(`https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/brandProducts/${params.brandName}`)
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/brandProducts/${params.id}`)
        },
        {
          path: "/myCart",
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: () => fetch('https://cars-ye-server-mktm605dq-tania-akters-projects.vercel.app/myCart')
        },
        {
          path: "/update",
          element: <PrivateRoute><Update></Update></PrivateRoute>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        }
      ]
    },
  ]);

const Routes = () => {
    
    return (
         <RouterProvider router={router} />
    );
};

export default Routes;