import React, { Component } from "react";
import "./Login.scss";
import firebase from "firebase";
import axios from "axios";
// import Particles from "react-particles-js";
// import jsonData from "./expObj";
import TextLoop from "react-text-loop";
import { connect } from "react-redux";
import classnames from "classnames";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";

const config = {
  apiKey: "AIzaSyBIuZ3vZtuCOSoOele5ppSPjw_dXHDLQHw",
  authDomain: "emaildataproba.firebaseapp.com",
  databaseURL: "https://emaildataproba.firebaseio.com",
  projectId: "emaildataproba",
  storageBucket: "emaildataproba.appspot.com",
  messagingSenderId: "609721907280"
};
firebase.initializeApp(config);

const FBprovider = new firebase.auth.FacebookAuthProvider();
const GLprovider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
  state = {
    emailSignUp: "",
    passwordSignUp: "",
    emailLogIn: "",
    passwordLogIn: "",
    activeTab: "1",
    errMsg: ""
  };
  alertHandle() {
    Alert.warning(
      <div style={{ margin: "0", padding: "0" }}>
        <h5>Log in not succesfull</h5>
        <p>
          <b>Error: </b>
          {this.state.errMsg}
        </p>
        <br />
        <hr />
        <p>Please follow the error info, or log in with diferent method</p>
      </div>,
      {
        position: "top",
        effect: "genie",
        onShow: function() {
          console.log("aye!");
        },
        beep: false,
        timeout: "none",
        offset: 0
      }
    );
  }
  alertHandleSignUp() {
    Alert.warning(
      <div style={{ margin: "0", padding: "0" }}>
        <h5>Sign up not succesfull</h5>
        <p>
          <b>Error: </b>
          {this.state.errMsg}
        </p>
        <br />
        <hr />
        <p>Please try again with diferent credentials</p>
      </div>,
      {
        position: "top",
        effect: "genie",
        onShow: function() {
          console.log("aye!");
        },
        beep: false,
        timeout: "none",
        offset: 0
      }
    );
  }
  alertHandleSignUpSuccessfull() {
    Alert.success(
      <div style={{ margin: "0", padding: "0" }}>
        <h5>Sign up succesfull!</h5>
        <br />
        <hr />
        <p>You will be redirected now, thank you.</p>
      </div>,
      {
        position: "top",
        effect: "genie",
        onShow: function() {
          console.log("aye!");
        },
        beep: false,
        timeout: "none",
        offset: 0
      }
    );
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  authWithFacebook() {
    firebase
      .auth()
      .signInWithPopup(FBprovider)
      .then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        ////////////////////
        axios
          .get("https://emaildataproba.firebaseio.com/fbUsers.json")
          .then(response => {
            const firstRoundObj = response.data;
            const secondRoundObj = [];
            let thirdRoundObj = [];
            for (let x in firstRoundObj) {
              secondRoundObj.push(firstRoundObj[x]);
            }
            thirdRoundObj = secondRoundObj.flat();

            if (thirdRoundObj.includes(user.displayName)) {
              return;
            } else {
              let fourthRoundObj = [...thirdRoundObj];
              fourthRoundObj.push(user.displayName);

              axios
                .delete("https://emaildataproba.firebaseio.com/fbUsers.json")
                .then(response => {
                  console.log(response);
                  axios
                    .post(
                      "https://emaildataproba.firebaseio.com/fbUsers.json",
                      fourthRoundObj
                    )
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            }
          })
          .catch(error => {
            console.log(error);
          });
        //////////////
        localStorage.setItem("acountName", user.displayName);
        localStorage.setItem("acountPicture", user.photoURL);

        //////////////
        localStorage.setItem("auth", true);
        localStorage.setItem("FBtoken", token);

        this.props.logInEvent();
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // ...
        this.setState({
          errMsg: error.message
        });
        this.alertHandle();
      });
  }

  authWithGoogle() {
    firebase
      .auth()
      .signInWithPopup(GLprovider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        //////////////
        axios
          .get("https://emaildataproba.firebaseio.com/glUsers.json")
          .then(response => {
            const firstRoundObj = response.data;
            const secondRoundObj = [];
            let thirdRoundObj = [];
            for (let x in firstRoundObj) {
              secondRoundObj.push(firstRoundObj[x]);
            }
            thirdRoundObj = secondRoundObj.flat();

            if (thirdRoundObj.includes(user.email)) {
              return;
            } else {
              let fourthRoundObj = [...thirdRoundObj];
              fourthRoundObj.push(user.email);

              axios
                .delete("https://emaildataproba.firebaseio.com/glUsers.json")
                .then(response => {
                  axios
                    .post(
                      "https://emaildataproba.firebaseio.com/glUsers.json",
                      fourthRoundObj
                    )
                    .then(resp => console.log("post succesfull"))
                    .catch(err => console.log("err posting"));
                })
                .catch(err => console.log("err deleting"));
            }
          })
          .catch(error => {
            console.log(error);
          });
        //////////////
        localStorage.setItem("acountName", user.displayName);
        localStorage.setItem("acountPicture", user.photoURL);

        localStorage.setItem("auth", true);
        localStorage.setItem("GLtoken", token);

        this.props.logInEvent();
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // ...

        this.setState({
          errMsg: error.message
        });
        this.alertHandle();
      });
  }

  SignUpWithEmailPassword = (email, password) => {
    if (typeof email === "string" && typeof password === "string") {
      let alreadyExists = false;
      axios
        .get("https://emaildataproba.firebaseio.com/email&passUsers.json")
        .then(response => {
          let result = Object.keys(response.data).map(function(key) {
            return [Number(key), response.data[key]];
          });

          result.map(x => {
            if (x[1].email === email) {
              alreadyExists = true;
            }
          });
          if (!alreadyExists) {
            axios
              .post(
                "https://emaildataproba.firebaseio.com/email&passUsers.json",
                {
                  email: email,
                  password: password
                }
              )
              .then(response => {
                this.alertHandleSignUpSuccessfull();
                setTimeout(() => {
                  localStorage.setItem("auth", true);
                  localStorage.setItem("EmailPassToken", email + password);
                  this.props.logInEvent();
                }, 2000);
              })
              .catch(error => {
                alert("err");
              });
          } else {
            this.setState({
              errMsg: "User already exist"
            });
            this.alertHandleSignUp();
          }
        });
    } else {
      this.setState({
        errMsg: "Invalid signup credentials"
      });
      this.alertHandleSignUp();
    }
  };

  SignInWithEmailPassword(email, password) {
    if (typeof email === "string" && typeof password === "string") {
      let wrongData = true;

      axios
        .get("https://emaildataproba.firebaseio.com/email&passUsers.json")
        .then(response => {
          let result = Object.keys(response.data).map(function(key) {
            return [Number(key), response.data[key]];
          });

          result.map(x => {
            if (x[1].email === email && x[1].password === password) {
              return (wrongData = false);
            }
          });

          if (!wrongData) {
            localStorage.setItem("auth", true);
            localStorage.setItem("EmailPassToken", email + password);

            this.props.logInEvent();
          } else {
            this.setState({
              errMsg: "Wrong email or password"
            });
            this.alertHandle();
          }
        });
    } else {
      this.setState({
        errMsg: "Invalid login credentials"
      });
      this.alertHandle();
    }
  }
  emailSignUpHandler = () => {
    return this.setState({
      emailSignUp: document.getElementById("emailSignUp").value
    });
  };
  passwordSignUpHandler = () => {
    return this.setState({
      passwordSignUp: document.getElementById("passwordSignUp").value
    });
  };

  emailLogInHandler = () => {
    return this.setState({
      emailLogIn: document.getElementById("emailLogIn").value
    });
  };
  passwordLogInHandler = () => {
    return this.setState({
      passwordLogIn: document.getElementById("passwordLogIn").value
    });
  };

  render() {
    return (
      <div className="loginBackgrnd">
        <div className="loginBackdrop">
          <Alert stack={{ limit: 3 }} />
          <div className="heading">
            <h1>Best online shop </h1>
            <h3>
              <TextLoop adjustingSpeed={75} fade={true}>
                <h3>Up to 40% discount!</h3>
                <h3>Low low prices</h3>
                <h3>Order now!</h3>
              </TextLoop>
            </h3>
            {/* <div className="particles">
            <Particles params={jsonData} />
          </div>  */}
          </div>

          <div className="login">
            {/* ////////////// TABS ///////////////// */}

            <div>
              <nav className="signUpNav" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Log in
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Sign up
                  </NavLink>
                </NavItem>
              </nav>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <br />
                  <br />
                  <div>
                    <input
                      type="email"
                      id="emailLogIn"
                      placeholder="Email"
                      className="inputLog"
                    />
                    <br />
                    <input
                      type="password"
                      id="passwordLogIn"
                      placeholder="Password"
                      className="inputLog"
                    />
                    <br />
                    <br />
                    <button
                      className="loginBtn"
                      onClick={() => {
                        let email = document.getElementById("emailLogIn").value;
                        let password = document.getElementById("passwordLogIn")
                          .value;
                        this.SignInWithEmailPassword(email, password);
                      }}
                    >
                      Log in
                    </button>
                    <br />
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div>
                    <br />
                    <br />
                    <input
                      type="email"
                      id="emailSignUp"
                      placeholder="Email"
                      className="inputLog"
                    />
                    <br />
                    <input
                      type="password"
                      id="passwordSignUp"
                      className="inputLog"
                      placeholder="Password"
                    />
                    <br />
                    <br />
                    <button
                      className="loginBtn"
                      onClick={() => {
                        const email = document.getElementById("emailSignUp")
                          .value;
                        const password = document.getElementById(
                          "passwordSignUp"
                        ).value;
                        this.SignUpWithEmailPassword(email, password);
                      }}
                    >
                      Sign up
                    </button>
                    <br />
                  </div>
                </TabPane>
              </TabContent>
            </div>

            {/* /////////////////////////////////// */}

            <br />
            <h3>Or you can </h3>
            <br />
            <button
              className="fbBtn"
              onClick={() => {
                this.authWithFacebook();
              }}
            >
              <i style={{ fontSize: "20px", padding: "4px" }} className="fab">
                &#xf09a;
              </i>{" "}
              Login with Facebook
            </button>
            <br />
            <br />
            <button
              className="glBtn"
              onClick={() => {
                this.authWithGoogle();
              }}
            >
              <i style={{ fontSize: "20px", padding: "4px" }} className="fab">
                &#xf1a0;
              </i>{" "}
              Login with Google
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToAction = dispatch => {
  return {
    logInEvent: () => dispatch({ type: "LOGIN" }),
    logOutEvent: () => dispatch({ type: "LOGOut" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToAction
)(Login);
