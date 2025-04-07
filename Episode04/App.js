import React from 'react';
import ReactDOM from 'react-dom/client'; 

/*
* Header
    - Logo
    - Nav Items

* Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - Image
            - Name of res, Start Rating, Cuisine, Delivery tie

* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/
// https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                 className="logo" 
                 src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
            <img
                className='res-logo'
                alt='res-logo'
                src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574'
            />
            <h3>La crest</h3>
            <h4>Pasta , Western Cuisine</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-containers'>
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard />
            </div>
        </div>
    )
};
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);