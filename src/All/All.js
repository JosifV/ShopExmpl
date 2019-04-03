import React, { Component } from "react";
import "./All.scss";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";

import Home from "../Home/Home";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Payments from "../Payments/Payments";

import firebase from "firebase";

import { connect } from "react-redux";
import {
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";

class All extends Component {
  state = {
    modal: false,
    orderedItemSsS: {
      id: null,
      name: "",
      imgSrc: null,
      price: null,
      orderedTimes: null
    },
    somethingOrdered: false,
    everythingDeleted: false,
    totalPrice: [],
    name: "",
    phone: "",
    address: "",
    postal: "",
    email: ""
  };

  nameHandler = event => {
    return this.setState({
      name: event.target.value
    });
  };
  phoneHandler = event => {
    return this.setState({
      phone: event.target.value
    });
  };
  addressHandler = event => {
    return this.setState({
      address: event.target.value
    });
  };
  postalHandler = event => {
    return this.setState({
      postal: event.target.value
    });
  };
  emailHandler = event => {
    return this.setState({
      email: event.target.value
    });
  };
  signOutUniverzal() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("auth");

        this.props.logOutEvent();
        window.location = "/";
      })
      .catch(error => {
        // An error happened.
      });
  }
  render() {
    let showInput = false;
    if (this.props.ttlprc) {
      showInput = true;
    } else {
      showInput = false;
    }
    let showWishInput = false;
    if (this.props.wishttlprc) {
      showWishInput = true;
    } else {
      showWishInput = false;
    }
    let showProds = false;
    if (this.props.ctr) {
      showProds = true;
    } else {
      showProds = false;
    }
    let showWishes = false;
    if (this.props.wishlistCtr) {
      showWishes = true;
    } else {
      showWishes = false;
    }
    const imgUrl = localStorage.getItem("acountPicture");
    const nameCustomer = localStorage.getItem("acountName");
    return (
      <>
        <Alert stack={{ limit: 3 }} />
        <ul className="navBar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li
            className="orders"
            onClick={() => {
              this.signOutUniverzal();
            }}
          >
            Log out
          </li>
          <li
            onClick={() => this.props.toggleModal()}
            className="orders"
            style={{ padding: "12.7px" }}
          >
            <i className="fa">&#xf291;</i>
            <Badge color="danger">{this.props.ctr}</Badge>
          </li>

          {/* WISHLIST WISHLIST WISHLIST */}
          <li
            onClick={() => {
              this.props.toggleModalWish();
            }}
            className="orders"
            style={{ padding: "12.7px" }}
          >
            <i className="fa">&#xf004;</i>
            <Badge
              color="success"
              style={{ color: "white", background: "#00cca3" }}
            >
              {this.props.wishlistCtr}
            </Badge>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact component={Home} key="a" />
          <Route exact path="/Products" component={Products} key="a" />
          <Route path="/Contact" exact component={Contact} key="a" />
        </Switch>

        <Footer />
        <Modal
          isOpen={this.props.togleMod}
          toggle={() => this.props.toggleModal()}
        >
          <ModalHeader toggle={() => this.props.toggleModal()}>
            <div>
              <h2 className="nonSoFar">Order summary</h2>
            </div>
          </ModalHeader>

          <ModalBody>
            {showProds ? (
              <div>
                <ul className="modalFlex">
                  {this.props.ordLst.map(q => (
                    <li key={q.id}>
                      <img
                        style={{ width: "100%" }}
                        src={q.val[2]}
                        alt="imgNotFound"
                      />
                      <div>
                        <h2>{q.val[1]}</h2>
                      </div>
                      <div>
                        <h4>Price: {q.val[3]}</h4>
                      </div>
                      <button
                        className="delBtn"
                        onClick={() => this.props.onDelete(q.id, q.val[3])}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                {showInput ? (
                  <div className="darkModal">
                    <div className="userInfoModal">
                      {imgUrl ? <img src={imgUrl} alt="..." /> : null}
                      {nameCustomer ? <h6>{nameCustomer}</h6> : null}
                    </div>
                    <br />
                    <h4>
                      Items ordered:{" "}
                      <Badge color="primary">{this.props.ctr}</Badge>
                    </h4>
                    <h4>
                      Total price:{" "}
                      <Badge color="success">{this.props.ttlprc}</Badge>
                    </h4>
                    <br />
                    <form className="modalForm">
                      <input
                        onChange={this.nameHandler}
                        id="name"
                        type="text"
                        placeholder="Your full name *"
                        required
                      />
                      <br />
                      <br />
                      <input
                        onChange={this.phoneHandler}
                        id="phone"
                        type="text"
                        placeholder="Your phone number"
                      />
                      <br />
                      <br />
                      <input
                        onChange={this.addressHandler}
                        id="address"
                        type="text"
                        placeholder="Your address City/Street/Number"
                      />
                      <br />
                      <br />
                      <input
                        onChange={this.postalHandler}
                        id="postal"
                        type="text"
                        placeholder="Postal code"
                      />
                      <br />
                      <br />
                      <input
                        onChange={this.emailHandler}
                        id="email"
                        type="email"
                        placeholder="Your email *"
                        required
                      />
                    </form>
                  </div>
                ) : null}
              </div>
            ) : (
              <h4 className="nonSoFar">
                No orders so far <i className="far">&#xf5a5;</i>
              </h4>
            )}
          </ModalBody>
          <ModalFooter>
            <div className="darkModalBtns">
              <Container>
                <Row>
                  {showInput ? (
                    <Col md="12">
                      <Payments
                        customerData={[
                          this.state.name,
                          this.state.phone,
                          this.state.address,
                          this.state.postal,
                          this.state.email
                        ]}
                      />
                      <br />
                      <br />
                    </Col>
                  ) : null}
                  <Col md="12">
                    <Button
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "120%",
                        fontWeight: "400"
                      }}
                      color="danger"
                      onClick={() => {
                        this.props.toggleModal();
                      }}
                    >
                      Go back
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </ModalFooter>
        </Modal>
        {/* /////////////////// */}

        <Modal
          isOpen={this.props.togleModWish}
          toggle={() => this.props.toggleModalWish()}
        >
          <ModalHeader toggle={() => this.props.toggleModalWish()}>
            <div>
              <h2 className="nonSoFar">Wishes summary</h2>
            </div>
          </ModalHeader>
          <ModalBody>
            {showWishes ? (
              <div>
                <ul className="modalFlex">
                  {this.props.wishLst.map(q => (
                    <li key={q.id}>
                      <img
                        style={{ width: "100%" }}
                        src={q.val[2]}
                        alt="imgNotFound"
                      />
                      <div>
                        <h2>{q.val[1]}</h2>
                      </div>
                      <div>
                        <h4>Price: {q.val[3]}</h4>
                      </div>
                      <button
                        className="delBtnWish"
                        onClick={() => this.props.onDeleteWish(q.id, q.val[3])}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                {showWishInput ? (
                  <div className="darkModalWish">
                    <div className="userInfoModal">
                      {imgUrl ? <img src={imgUrl} alt="..." /> : null}
                      {nameCustomer ? <h6>{nameCustomer}</h6> : null}
                    </div>
                    <br />
                    <h4>
                      Items wished:{" "}
                      <Badge style={{ color: "white", background: "#800080" }}>
                        {this.props.wishlistCtr}
                      </Badge>
                    </h4>
                    <h4>
                      Price of your wishes:{" "}
                      <Badge color="primary">{this.props.wishttlprc}</Badge>
                    </h4>
                  </div>
                ) : null}
              </div>
            ) : (
              <h4 className="nonSoFar">
                No wishes so far <i className="fas">&#xf7a9;</i>
              </h4>
            )}
          </ModalBody>
          <ModalFooter>
            <div className="darkModalBtnsWish">
              <Container>
                <Row>
                  {showWishInput ? (
                    <Col md="12">
                      <Button
                        style={{
                          width: "100%",
                          padding: "10px",
                          fontSize: "120%",
                          fontWeight: "400"
                        }}
                        color="info"
                        onClick={() => {
                          this.props.addWishesToReality();
                          this.props.toggleModalWish();
                        }}
                      >
                        Order all
                      </Button>
                      <br />
                      <br />
                    </Col>
                  ) : null}
                  <Col md="12">
                    <Button
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "120%",
                        fontWeight: "400"
                      }}
                      color="danger"
                      onClick={() => {
                        this.props.toggleModalWish();
                      }}
                    >
                      Go back
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    wishlistCtr: state.counterWishlist,
    prodOrd: [...state.orderedItem],
    ordLst: state.orderedItemList,
    wishLst: state.wishlistItemList,
    ttlprc: state.totalPrice,
    wishttlprc: state.totalPriceWish,
    togleMod: state.togleZaModl,
    togleModWish: state.togleZaModlWish,
    togleZaAlrt: state.togleZaAlrt,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id, cn) => dispatch({ type: "DEL", elVal: id, priceA: cn }),
    onDeleteWish: (id, cn) =>
      dispatch({ type: "DELWish", elVal: id, priceA: cn }),
    toggleModal: () => dispatch({ type: "CLSAPY" }),
    toggleModalWish: () => dispatch({ type: "CLSWSHMDL" }),
    addWishesToReality: () => dispatch({ type: "ADDwishes" }),
    logOutEvent: () => dispatch({ type: "LOGOut" })
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(All)
);
