import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default",
        location: "India",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rutvk00");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto text-center">
        <img
          src={avatar_url}
          alt="GitHub Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Name: {name}
        </h2>
        <h3 className="text-gray-600 mb-1">Location: {location}</h3>
        <h4 className="text-blue-600 font-medium">@rutvk00</h4>
      </div>
    );
  }
}

export default UserClass;
