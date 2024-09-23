import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props){
    super(props)

    console.log("parent constructor")
  }

  componentDidMount() {
    console.log("parent did mount")
  }

  render() {
    console.log("parent render page")

    return (
      <>
        <div>About</div>
        <User name={"karan"} />
        <UserClass name={"karan are the student of this"} />
      </>
    );
  }
}

// const About = () => {
//   return (

//   );
// };

export default About;
