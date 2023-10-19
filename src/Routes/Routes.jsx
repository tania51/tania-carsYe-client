import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddProducts from "../Pages/AddProducts";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../components/AllProducts/BrandProducts";
import Details from "../components/Details";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
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
          loader: ({params}) => fetch(`http://localhost:5001/brandProducts/${params.brandName}`)
        },
        {
          path: "/brandProducts/:id",
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5001/brandProducts/${params.id}`)
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