import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "dummy",
        location: "haidrabad",
        avatar_url: "https://www.dummy_pic.jpg",
      },
    };

    console.log("child constructor");
  }

  async componentDidMount() {

    this.timer = setInterval(() => {
        console.log("my Intervel")
    }, 1000)

    console.log("child componentdidmount");
    const userData = await fetch("https://api.github.com/users/Karanbairwaa12")
    // console.log(await userData.response.json())
    const data = await userData.json()

    console.log(data);
    this.setState({
        userInfo: data
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {
        
    // }
    if(this.state.count !== prevState.count) {

    }

    if(this.state.count2 !== prevState.count2) {

    }
    console.log("child component did update work")
  }

  componentWillUnmount() {
    
    clearInterval(this.timer)
    console.log("this will unmount")
  }

  render() {
    console.log("child render");

    const { name } = this.props;
    const { count, count2, userInfo } = this.state;
    return (
      <div>
        <div>{name} class</div>
        <h1>count +1 :{count}</h1>
        <h2>count +2 :{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase
        </button>
        <div
          style={{ width: "100vw", border: "1px solid #000", padding: "20px" }}
        >
          <div>
            <img src={userInfo.avatar_url} alt="" />
            <h1>name: {userInfo.name}</h1>
            <h3>location: {userInfo.location}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
