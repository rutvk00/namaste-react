import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count1] = useState(0);
    console.log("render")
    return (
    <div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count1  : {count1}</h1>
        <h2>Name : {props.name} </h2>
        <h3>Location : Gandhinagar</h3>
        <h4>Contact : @rutvk00</h4>
    </div>
    );
}; 

export default User;