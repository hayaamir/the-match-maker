import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import Layout from './components/Layout';
import UserDetails from './components/UserDetails';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Notebook from './pages/Notebook'
import Profile from './pages/Profile'
import Registration from './pages/Registration'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "notebook",
                element: <Notebook />,
            },
            {
                path: "notebook/:id",
                element: <UserDetails />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "admin",
                element: <Admin />
            },
            {
                path: "registration",
                element: <Registration />
            }
        ],
    },
]);