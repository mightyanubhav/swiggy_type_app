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
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Component = () =>{
    return (
        <Provider store={appStore}>
            <div className="wrapper">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
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

root.render(

        <RouterProvider router={appRouter} />
);


