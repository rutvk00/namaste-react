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
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export default RestaurantCard;