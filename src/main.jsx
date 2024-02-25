import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About.jsx';
import Skill from './component/Skill.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/skill',
    element: <Skill></Skill>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
