import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../components/layout/Main';
import Home from '../components/pages/Home/Home';
import AddCard from '../components/pages/AddCard/AddCard';
import UpdateCard from '../components/pages/UpdateCard/UpdateCard';
import Error from '../components/pages/Shared/Error/Error';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/add",
            element: <AddCard />,
        },
        {
            path: "/update",
            element: <UpdateCard />
        }
      ]
    },
  ]);

export default router ;