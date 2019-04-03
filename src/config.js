import firebase from "firebase";
module.exports = {
  /*   USER: "YOUR_EMAIL_ADDRESS",
  PASS: "PASSWORD_FOR_EMAIL", */
  facebookProvider: new firebase.auth.facebookAuthProvider()
};
