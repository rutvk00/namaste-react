import React , {lazy , Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom/client'; 
import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import UserContex from './utils/UserContex';

import { Provider } from "react-redux";
// import Grocery from './components/Grocery';

// Chunking
// Code Splitting
// Lazy Loading
// On Demand Loading
// Dynamic Bundling
// Dynamic import 
const Grocery = lazy(() => import("./components/Grocery"));

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import appStore from './utils/appStore';


const AppLayout = () => {
    
    const [userName , setUserName] = useState("");
    useEffect(() => {
        // Make API Call for username and password
        const data = {
            name : "Rutvik"
        }
        setUserName(data.name)
    },[]);


    return (
        <Provider store = {appStore}>
            <UserContex.Provider value ={{loggedInUser : userName , setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContex.Provider>
        </Provider>
        
    )
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