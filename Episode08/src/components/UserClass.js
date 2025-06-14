import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count1 : 0
        }
    }

    render() {
        const {count , count1} = this.state;
        return (
            <div className="user-card">
                <h1>Count : {count }</h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count+1,
                    })
                }}>Increase Count</button>
                <h1>Count1 : {count1} </h1>
                <h2>Name : {this.props.name} </h2>
                <h3>Location : Gandhinagar</h3>
                <h4>contact : @rutvk00</h4>
            </div>
        )
    }
}

export default UserClass;