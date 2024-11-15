import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Corporate from './components/Corporate';
import Search from './components/Search';
import Error from './components/Error';
import Offers from './components/Offers';
import Help from './components/Help';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';

const Component = () =>{
    return (
        <div className="wrapper">
            <Header/>
            <Outlet/>
        </div>
   );
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Component />, 
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/corporate",
                element: <Corporate /> // Pass the component as JSX, not a string
            }, 
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/offers",
                element: <Offers />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/sign-in",
                element: <SignIn />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }, 
   
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

const originalWarn = console.warn;
console.warn = (...args) => {
    if (args[0]?.includes('React Router Future Flag Warning')) {
        return; // Suppress the warning
    }
    originalWarn(...args);
};


root.render(
    <RouterProvider 
        router={appRouter} 
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }} 
    />
);



