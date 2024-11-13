import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Corporate from './components/Corporate';
import Search from './components/Search';
import Error from './components/Error';

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



