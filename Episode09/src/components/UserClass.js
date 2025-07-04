import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Default",
                location : "India",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/rutvk00");
        const json = await data.json();

        this.setState({
            userInfo : json
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Compenent will unmount");
    }

    render() {
        console.log("userInfo : " , this.state.userInfo);
        const {name , location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name : {name} </h2>
                <h3>Location : {location}</h3>
                <h4>contact : @rutvk00</h4>
            </div>
        )
    }
}

export default UserClass;