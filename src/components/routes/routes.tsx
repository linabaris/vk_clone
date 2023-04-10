import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";

export const routes = createHashRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>,
            
            }, {
                path: 'profile/:id',
                element: <Home/>
            }, {
                path: '/messages',
                element: <Home/>
            }, {
                path: '/message/:id',
                element: <Home/>
            }, {
                path: '/friends/:id',
                element: <Home/>
            }, {
                path: '/auth',
                element: <Home/>
            }
        ]
    }
])

export const privateRoutes = createHashRouter([
    {
        path: '/message',
        element: <Home/>
    }
])