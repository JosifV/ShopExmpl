import React, { Component } from "react";
import "./Home.scss";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron
          style={{
            background: "#B7D500",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <Container>
            <Row>
              <Col md="6">
                <div className="jumboLogo">
                  <i className="fa">&#xf19c;</i>
                </div>
              </Col>
              <Col md="6">
                <ul className="jumboList">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </li>
                  <li>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </li>
                </ul>
                <br />
                <button className="startNowBtn">Start now</button>
                <br />
                <br />
              </Col>
            </Row>
            <br />
          </Container>
        </Jumbotron>
        <Jumbotron
          style={{
            background: "#8509C4",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <Container>
            <Row>
              <Col md="6">
                <div className="jumboLogo">
                  <i className="fa">&#xf109;</i>
                </div>
              </Col>
              <Col md="6">
                <div className="jumboText">
                  <p>
                    {" "}
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus.{" "}
                  </p>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col md="12">
                <div style={{ overflowX: "auto" }}>
                  <table className="prodTable">
                    <thead style={{ padding: "55px" }}>
                      <tr>
                        <th />
                        <th>Basic</th>
                        <th>Advanced</th>
                        <th>Pro</th>
                      </tr>
                    </thead>
                    <tbody style={{ padding: "55px" }}>
                      <tr className="trHover">
                        <td>Software support</td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                      </tr>
                      <tr className="trHover">
                        <td>Web extensions</td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                      </tr>
                      <tr className="trHover">
                        <td>System protection</td>
                        <td />
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                      </tr>
                      <tr className="trHover">
                        <td>Advanced scanning</td>
                        <td />
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                      </tr>
                      <tr className="trHover">
                        <td>Add free</td>
                        <td />
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                      </tr>
                      <tr className="trHover">
                        <td>Lifetime support</td>
                        <td />
                        <td />
                        <td>
                          <i className="fa">&#xf00c;</i>
                        </td>
                      </tr>
                      <tr className="trDownload">
                        <td />
                        <td>
                          <button className="freeBtn">Download</button>
                        </td>
                        <td>
                          <button className="advBtn">Download</button>
                        </td>
                        <td>
                          <button className="proBtn">Download</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </Jumbotron>
        <Jumbotron
          style={{
            background: "#FF5900",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <br />
          <Container>
            <Row>
              <Col md="4">
                <Card style={{ border: "none" }}>
                  <CardBody style={{ background: "#FF5900", padding: "40px" }}>
                    <CardTitle
                      style={{
                        color: "white",
                        fontSize: "350%",
                        textAlign: "center"
                      }}
                    >
                      <i className="fa">&#xf0a3;</i>
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </CardText>
                    <Button color="dark" style={{ width: "100%" }}>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ border: "none" }}>
                  <CardBody style={{ background: "#FF5900", padding: "40px" }}>
                    <CardTitle
                      style={{
                        color: "white",
                        fontSize: "350%",
                        textAlign: "center"
                      }}
                    >
                      <i className="fa">&#xf086;</i>
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </CardText>
                    <Button color="dark" style={{ width: "100%" }}>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ border: "none" }}>
                  <CardBody style={{ background: "#FF5900", padding: "40px" }}>
                    <CardTitle
                      style={{
                        color: "white",
                        fontSize: "350%",
                        textAlign: "center"
                      }}
                    >
                      <i className="fa">&#xf019;</i>
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </CardText>
                    <Button color="dark" style={{ width: "100%" }}>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card style={{ border: "none" }}>
                  <CardBody style={{ background: "#FF5900", padding: "40px" }}>
                    <CardTitle
                      style={{
                        color: "white",
                        fontSize: "350%",
                        textAlign: "center"
                      }}
                    >
                      <i className="fa">&#xf0c3;</i>
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </CardText>
                    <Button color="dark" style={{ width: "100%" }}>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ border: "none" }}>
                  <CardBody style={{ background: "#FF5900", padding: "40px" }}>
                    <CardTitle
                      style={{
                        color: "white",
                        fontSize: "350%",
                        textAlign: "center"
                      }}
                    >
                      <i className="fa">&#xf013;</i>
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </CardText>
                    <Button color="dark" style={{ width: "100%" }}>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ border: "none" }}>
                  <CardBody style={{ background: "#FF5900", padding: "40px" }}>
                    <CardTitle
                      style={{
                        color: "white",
                        fontSize: "350%",
                        textAlign: "center"
                      }}
                    >
                      <i className="fa">&#xf275;</i>
                    </CardTitle>
                    <CardText style={{ color: "white" }}>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </CardText>
                    <Button color="dark" style={{ width: "100%" }}>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
        </Jumbotron>
      </>
    );
  }
}
export default Home;
