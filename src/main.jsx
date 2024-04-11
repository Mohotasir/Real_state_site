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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        loader: ()=>fetch('/data.json'),
        element:<Home></Home>
      },
      {
        path:"/:id",
        loader: ()=>fetch('/data.json'),
        element:<EstateDetails></EstateDetails>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/contact",
        element:<>hello</>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
