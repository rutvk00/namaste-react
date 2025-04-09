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

const resList = [
    {   
        id : 1,
        resName : "La Crest",
        cuisines : "Asian, Chainesse , Japaneese",
        avgRating : "4.0 stars",
        deliveryTime : "40 minutes",
        imgUrl : "https://b.zmtcdn.com/data/pictures/5/20957845/23b9d70ae5086fd1587a656006597257.jpg?fit=around|750:500&crop=750:500;*,*"
    },
    {
        id : 2,
        resName : "KFC",
        cuisines : "Burger, Chicken , Fastfood",
        avgRating : "4.0 stars",
        deliveryTime : "40 minutes",
        imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/568513ec-4eff-4d5f-b821-d9256da2919c_37941.JPG"
    },
    {
        id : 3,
        resName : "RP's Pizzeria",
        cuisines : "Pizza, Garlic Bread, Fries",
        avgRating : "4.0 stars",
        deliveryTime : "40 minutes",
        imgUrl : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
    } 
];
const resData = {
    resName : "La-Crest",
    cuisines : "Asian, Chainesse , Japaneese",
    avgRating : "4.0 stars",
    deliveryTime : "40 minutes",
     imgUrl : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
} 

const resData1 = {
    resName : "KFC",
    cuisines : "Burger, Chicken , Fastfood",
    avgRating : "4.0 stars",
    deliveryTime : "40 minutes",
    imgUrl : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
} 

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        resName,
        cuisines,
        avgRating,
        deliveryTime
    } = resData;
    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
            <img
                className='res-logo'
                alt='res-logo'
                src= {resData.imgUrl}
            />
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-containers'>
               {
                resList.map(restaurant => 
                (<RestaurantCard key = {restaurant.id} resData={restaurant}/>))
               }
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