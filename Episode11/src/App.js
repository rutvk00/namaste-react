import React , {lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client'; 

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

// Chunking
// Code Splitting
// Lazy Loading
// On Demand Loading
// Dynamic Bundling
// Dynamic import 

const Grocery = lazy(() => import("./components/Grocery"));

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet />
    </div>
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading...</h1>}> <Grocery/> </Suspense>
            },
            {
                path : "/restaurants/:resID",
                element : <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);