import React from 'react'
import ReactDOM from 'react-dom/client'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
AOS.init();
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Error from './components/ErrorPage/Error.jsx';
import EstateDetails from './components/Estates/EstateDetails.jsx';
import Login from './components/LoginPage/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch('/data.json'),
        element: <Home></Home>
      },
      {
        path: "/:id",
        loader: () => fetch('/data.json'),
        element:<PrivateRoute> <EstateDetails></EstateDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/contact",
        element: <>hello</>
      },
      {
        path:"/updateProfile",
        element:<h1>your porfile</h1>
      },
      {
        path:"/blog",
        element: <h1>blog page</h1>
      },
      {
        path:"/userProfile",
        element:<UserProfile></UserProfile>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
