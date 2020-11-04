import React from "react";
import "./App.css";
import { Tools, Login } from "./widgets";
import { Galery } from "./frame";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      isLoggedIn: false,
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    localStorage.setItem("userName", this.state.userName);
    this.setState({ isLoggedIn: true });
  }

  logout() {
    this.setState({ userName: null, isLoggedIn: false });
    localStorage.clear();
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Tools
          isLoggedIn={this.state.isLoggedIn}
          userName={this.state.userName}
          onClick={this.logout}
        ></Tools>
        {!this.state.isLoggedIn ? (
          <Login onClick={this.login} onChange={this.handleChange}></Login>
        ) : (
          <Galery></Galery>
        )}
      </div>
    );
  }
}

export default App;
