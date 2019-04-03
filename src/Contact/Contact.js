import React, { Component } from "react";
import "./Contact.scss";
import { Jumbotron, Container, Row, Col } from "reactstrap";
class Contact extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          style={{
            background: "#9ACD32",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <div className="prodJumbo">
            <br />
            <br />
            <Container>
              <Row>
                <Col md="12">
                  {" "}
                  <h2>Conect with us</h2>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <br />
                  <p>
                    Nunc scelerisque metus nec libero posuere, ut iaculis ex
                    elementum. Curabitur mollis condimentum porta. Vivamus
                    posuere dictum dui. Nulla a consequat enim. Donec ante
                    felis, tincidunt sit amet ipsum at, cursus placerat purus.{" "}
                    <br />
                    <br />
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Proin auctor, ante eu
                    maximus volutpat, lacus nibh mollis ligula, at dapibus ex mi
                    ut felis.
                  </p>
                  <br />
                  {/* <h3 >Already a member? <a href="/">Sign in</a></h3> */}
                </Col>
                <Col md="6">
                  <br />
                  <form className="jumboForm">
                    <input type="text" placeholder="Your username" />
                    <br />
                    <br />
                    <input type="email" placeholder="Your email" />
                    <br />
                    <br />
                    <button type="submit">Subscribe now</button>
                    <br />
                    <br />
                  </form>
                </Col>
              </Row>
            </Container>

            <br />
            <br />
          </div>
        </Jumbotron>

        <Jumbotron
          style={{
            background: "#FF4500",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <div className="prodJumbo">
            <br />
            <Container>
              <Row>
                <Col md="12">
                  {" "}
                  <h2>Find us:</h2>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <br />
                  <p>
                    Nunc scelerisque metus nec libero posuere, ut iaculis ex
                    elementum. Curabitur mollis condimentum porta. Vivamus
                    posuere dictum dui. Nulla a consequat enim. Donec ante
                    felis, tincidunt ipsum at, cursus placerat. Nunc scelerisque
                    metus nec libero posuere. Nulla a consequat enim.{" "}
                  </p>
                  <br />
                  <br />
                  <button className="emailBtn">Email us</button>
                  <br />
                </Col>
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="gridLinks">
                    <a href="/">
                      <i className="fab">&#xf16d;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf082;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf081;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf174;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf0d4;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf431;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf1a2;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf092;</i>
                    </a>
                    <a href="/">
                      <i className="fab">&#xf08c;</i>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <br />
                  <br />
                  <br />
                  <h2>Who are we:</h2>
                  <br />
                  <br />
                </Col>
                <Col md="4">
                  <p>
                    <strong>Head executive:</strong> Bla Bla <br />{" "}
                    <strong>Main editor:</strong> Bla Bla <br />{" "}
                    <strong>Head of PR:</strong> Bla Bla <br />
                  </p>
                  <br />
                </Col>
                <Col md="4">
                  <p>
                    <strong>Master of section:</strong> Bla Bla <br />{" "}
                    <strong>Chief something:</strong> Bla Bla
                    <br />
                    <strong>Head something:</strong> Bla Bla
                    <br />
                  </p>
                  <br />
                </Col>
                <Col md="4">
                  <p>
                    <strong>Director of all:</strong> Bla Bla <br />{" "}
                    <strong>Master of sales:</strong> Bla Bla <br />{" "}
                    <strong>Chief consultant:</strong> Bla Bla
                    <br />
                  </p>
                  <br />
                </Col>
              </Row>
            </Container>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
export default Contact;
