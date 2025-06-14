import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is About section of Food Delivery App.</h2>
                <User name={"Rutvik Prajapati | function"}/>
                <UserClass name={"Rutvik Prajapati | Class "} />
            </div>
        )
    }
}


export default About;