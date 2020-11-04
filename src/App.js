import React from "react";
import "./App.css";
import { Tools, Login } from "./widgets";
import { Galery } from "./frame";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    localStorage.setItem("userName", this.state.userName);
  }

  logout() {
    this.setState({ userName: null });
    localStorage.clear();
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Tools
          isLoggedIn={localStorage.getItem('userName')}
          userName={this.state.userName}
          onClick={this.logout}
        ></Tools>
        {!localStorage.getItem('userName') ? (
          <Login onClick={this.login} onChange={this.handleChange}></Login>
        ) : (
          <Galery></Galery>
        )}
      </div>
    );
  }
}

export default App;
