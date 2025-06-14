import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    
    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is About section of Food Delivery App.</h2>
                {/* <User name={"Rutvik Prajapati | function"}/> */}
                <UserClass name={"Rutvik Prajapati 1| Class "} />
                <UserClass name={"Rutvik Prajapati 2| Class "} />
                <UserClass name={"Rutvik Prajapati 3| Class "} />
            </div>
        )
    }
}


export default About;