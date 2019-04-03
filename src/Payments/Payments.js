import React, { Component } from "react";
import { Button } from "reactstrap";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";

class Payments extends Component {
  alertHandle() {
    Alert.success(
      <div style={{ margin: "0", padding: "0" }}>
        <h5>Your order is successfully completed:</h5>
        {this.props.ordLst.map(x => {
          return (
            <p key={x.val[1] + "" + x.price}>
              <strong>{x.val[1]}: </strong> ${x.price}
            </p>
          );
        })}
        <div style={{ paddingTop: "15px" }}>
          <h6 style={{ borderTop: "1px solid white" }}>
            Total price: {this.props.ttlprc}
          </h6>
        </div>
      </div>,
      {
        position: "top",
        effect: "genie",
        onShow: function() {
          console.log("aye!");
        },
        beep: false,
        timeout: "none",
        offset: 40
      }
    );
  }

  render() {
    return (
      <StripeCheckout
        amount={this.props.ttlprc * 100}
        //ovo je token koji nam Stripe salje kad korisnik unese podatke
        token={token => console.log(token)}
        //ovo je publishable stripe key
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Mock payment"
        description="Card number is: 4242 4242 4242 4242"
        closed={() => {
          this.props.toggleModal();
          this.props.levelTheOrders();

          let arrayToPush = [];
          let orderData = arrayToPush.concat(this.props.customerData);
          let orderData2 = orderData.concat(this.props.ttlprc);

          let arrayToPushWithNameAndPrice = [];
          this.props.ordLst.map(x => {
            arrayToPushWithNameAndPrice.push(x.val[1], x.price);
          });

          let orderData3 = orderData2.concat([arrayToPushWithNameAndPrice]);
          this.props.sendCustomerInfoToDatabase(orderData3);
          this.alertHandle();
        }}
      >
        <Button
          className="btn"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "120%",
            fontWeight: "400"
          }}
          color="primary"
          onClick={() => {
            this.props.recordDataForEmail();
          }}
        >
          Proceed to payment
        </Button>
      </StripeCheckout>
    );
  }
}
const mapStateToProps = state => {
  return {
    ttlprc: state.totalPrice,
    togleMod: state.togleZaModl,
    totalOrderEmailData: state.totalOrderEmailData,
    ordLst: state.orderedItemList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch({ type: "CLSAPY" }),
    levelTheOrders: () => dispatch({ type: "LVLORDRS" }),
    recordDataForEmail: () => dispatch({ type: "RECORD" }),
    sendCustomerInfoToDatabase: customerInfo =>
      dispatch({
        type: "SENDCUSTOMERINFOTODATABASE",
        payload: customerInfo
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payments);
