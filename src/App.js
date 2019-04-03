import React, { Component } from "react";
import "./App.css";
import All from "./All/All";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {
  state = {
    authentized: false
  };
  componentWillMount() {
    let getAuthStorage = localStorage.getItem("auth");
    this.setState({
      authentized: getAuthStorage
    });
  }
  render() {
    if (this.state.authentized || this.props.auth) {
      return <All />;
    } else {
      return <Login />;
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
