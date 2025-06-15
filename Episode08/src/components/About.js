import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is About section of Food Delivery App.</h2>
                <User name={"Rutvik"}/>
                <UserClass name={"Rutvik Prajapati 1| Class "} />
            </div>
        )
    }
}


export default About;