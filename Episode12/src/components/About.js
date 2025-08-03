import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContex from "../utils/UserContex";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Side-effects or API calls can go here
  }

  render() {
    return (
      <div className="px-6 py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">About</h1>
        <h2 className="text-lg text-gray-600 mb-6">
          This is the About section of the Food Delivery App.
        </h2>

        <div className="mb-6">
          <UserContex.Consumer>
            {({loggedInUser}) => 
              <User name={loggedInUser} />
            }
          </UserContex.Consumer>
        </div>

        <div className="mb-6">
          <UserClass name={"Rutvik Prajapati 1 | Class"} />
        </div>
      </div>
    );
  }
}

export default About;
