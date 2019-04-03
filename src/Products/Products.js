import React, { Component } from "react";
import "./Products.scss";
import prodImg from "../Asets/prodImg.jpeg";
import prodImg2 from "../Asets/prodImg2.jpg";
import prodImg3 from "../Asets/prodImg3.jpg";
import Slider from "react-slick";
import Magnifier from "react-magnifier";
import { connect } from "react-redux";
import {
  Jumbotron,
  Button,
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  UncontrolledCollapse,
  Container,
  Row,
  Col
} from "reactstrap";

let orderedProd = [null, "", null, null, null];
let orderedProdWish = [null, "", null, null, null];

class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product A",
        imgSrc: prodImg,
        imgSrc2: prodImg2,
        imgSrc3: prodImg3,
        price: 540,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 2,
        name: "Product B",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 230,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 3,
        name: "Product V",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 1050,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 4,
        name: "Product G",
        imgSrc: prodImg2,
        imgSrc2: prodImg3,
        imgSrc3: prodImg,
        price: 405,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 5,
        name: "Product D",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 250,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 6,
        name: "Product Y",
        imgSrc: prodImg,
        imgSrc2: prodImg2,
        imgSrc3: prodImg3,
        price: 800,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 7,
        name: "Product E",
        imgSrc: prodImg,
        imgSrc2: prodImg3,
        imgSrc3: prodImg2,
        price: 760,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 8,
        name: "Product X",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 540,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 9,
        name: "Product Z",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 630,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 10,
        name: "Product I",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 290,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 11,
        name: "Product J",
        imgSrc: prodImg,
        imgSrc2: prodImg2,
        imgSrc3: prodImg3,
        price: 750,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 12,
        name: "Product K",
        imgSrc: prodImg2,
        imgSrc2: prodImg3,
        imgSrc3: prodImg,
        price: 740,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 13,
        name: "Product L",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 620,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 14,
        name: "Product Q",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 450,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 15,
        name: "Product M",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 1250,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 16,
        name: "Product A1",
        imgSrc: prodImg,
        imgSrc2: prodImg2,
        imgSrc3: prodImg3,
        price: 540,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 17,
        name: "Product B1",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 230,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 18,
        name: "Product V1",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 1050,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 19,
        name: "Product G1",
        imgSrc: prodImg2,
        imgSrc2: prodImg3,
        imgSrc3: prodImg,
        price: 405,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 20,
        name: "Product D1",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 250,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 21,
        name: "Product Y1",
        imgSrc: prodImg,
        imgSrc2: prodImg2,
        imgSrc3: prodImg3,
        price: 800,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 22,
        name: "Product E1",
        imgSrc: prodImg,
        imgSrc2: prodImg3,
        imgSrc3: prodImg2,
        price: 760,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 23,
        name: "Product X1",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 540,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 24,
        name: "Product Z1",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 630,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 25,
        name: "Product I1",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 290,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 26,
        name: "Product J1",
        imgSrc: prodImg,
        imgSrc2: prodImg2,
        imgSrc3: prodImg3,
        price: 750,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 27,
        name: "Product K1",
        imgSrc: prodImg2,
        imgSrc2: prodImg3,
        imgSrc3: prodImg,
        price: 740,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 28,
        name: "Product L1",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 620,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 29,
        name: "Product Q1",
        imgSrc: prodImg2,
        imgSrc2: prodImg,
        imgSrc3: prodImg3,
        price: 450,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      },
      {
        id: 30,
        name: "Product M1",
        imgSrc: prodImg3,
        imgSrc2: prodImg2,
        imgSrc3: prodImg,
        price: 1250,
        orderedTimes: 0,
        desc: (
          <div
            style={{
              textAlign: "center",
              color:'white',
              margin: "0",
              
              letterSpacing: "1.2px",
              fontSize: "150%",
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              
            }}
          >
          <div className="tooltipMaterial"><span className="tooltiptext">Material</span><i className='fas'>&#xf6e3;</i><br/> Metal</div>
          <div className="tooltipSize"><span className="tooltiptext">Measurements</span><i className='fas'>&#xf12b;</i><br/> {Math.floor(Math.random(100) * 100)} x{" "}
                {Math.floor(Math.random(100) * 100)} cm</div>
          <div className="tooltipDesigner"><span className="tooltiptext">Design by</span><i className='fas'>&#xf4fe;</i><br/> Jon Doe</div>
          <div className="tooltipState"><span className="tooltiptext">Availability</span><i className='fas'>&#xf00c;</i><br/> Available</div>
          </div>
        ),
        ordered: false,
        collapse: false
      }
    ]
  };
  copyOfItemsHandler = a => {
    return [
      (orderedProd[0] = a.id),
      (orderedProd[1] = a.name),
      (orderedProd[2] = a.imgSrc),
      (orderedProd[3] = a.price),
      (orderedProd[4] = a.orderedTimes)
    ];
  };
  copyOfItemsHandlerWish = b => {
    return [
      (orderedProdWish[0] = b.id),
      (orderedProdWish[1] = b.name),
      (orderedProdWish[2] = b.imgSrc),
      (orderedProdWish[3] = b.price),
      (orderedProdWish[4] = b.orderedTimes)
    ];
  };

  apendToListHandler = () => {};
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let listOfProdFirstHalf = (
      <div className="productsGridLayout">
        {this.state.products.map(x => {
          if (x.id < this.state.products.length / 2) {
            return (
              <div key={x.id}>
                <div className="divImg">
                  <Slider {...settings}>
                    <div>
                      <Magnifier
                        zoomFactor={2}
                        mgShape="square"
                        mgWidth={120}
                        mgHeight={120}
                        src={x.imgSrc}
                        alt="img not found"
                      />
                    </div>
                    <div>
                      <Magnifier
                        zoomFactor={2}
                        mgShape="square"
                        mgWidth={120}
                        mgHeight={120}
                        src={x.imgSrc2}
                        alt="img not found"
                      />
                    </div>
                    <div>
                      <Magnifier
                        zoomFactor={2}
                        mgShape="square"
                        mgWidth={120}
                        mgHeight={120}
                        src={x.imgSrc3}
                        alt="img not found"
                      />
                    </div>
                  </Slider>
                </div>
                <hr />
                <div>
                  <h3
                    style={{
                      padding: "25px",
                      background: "#333",
                      color: "white",
                      marginBottom: "0",
                      border: "none",
                      letterSpacing: "1.2px"
                    }}
                  >
                    {x.name}{" "}
                  </h3>
                  <Button
                    style={{
                      padding: "30px",
                      fontSize: "150%",
                      background: "#333",
                      color: "white",
                      marginTop: "0",
                      width: "100%",
                      border: "none",
                      borderRadius: "0",
                      letterSpacing: "1.2px"
                    }}
                    id={"a" + x.id}
                  >
                    Specification <i className="fa">&#xf103;</i>
                  </Button>
                  <UncontrolledCollapse toggler={"#a" + x.id}>
                    <Card>
                      <CardBody style={{padding: "0"}}>
                        <CardSubtitle>{x.desc}</CardSubtitle>
                        <CardText>{""}</CardText>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <p
                    style={{
                      fontSize: "150%",
                      background: "#333",
                      color: "white",
                      margin: "0",
                      border: "none",
                      letterSpacing: "1.2px"
                    }}
                  >
                    <br />
                    Price: ${x.price}
                    <br />
                    <br />
                    <Button
                      color="success"
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "150%",
                        marginTop: "0"
                      }}
                      onClick={() => {
                        this.copyOfItemsHandlerWish(x);
                        this.props.copyItemWish();
                        this.props.orderINCWish();
                        this.props.onStoreWish();
                      }}
                    >
                      Wishlist
                    </Button>
                    <Button
                      onClick={() => {
                        this.copyOfItemsHandler(x);
                        this.props.copyItem();
                        this.props.orderINC();
                        this.props.onStore();
                      }}
                      color="primary"
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "150%",
                        marginTop: "0"
                      }}
                    >
                      Order
                    </Button>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
    let listOfProdSecondHalf = (
      <div className="productsGridLayout">
        {this.state.products.map(x => {
          if (
            x.id > this.state.products.length / 2 ||
            x.id === this.state.products.length / 2
          ) {
            return (
              <div key={x.id}>
                <div className="divImg">
                  <Slider {...settings}>
                    <div>
                      <Magnifier
                        zoomFactor={2}
                        mgShape="square"
                        mgWidth={120}
                        mgHeight={120}
                        src={x.imgSrc}
                        alt="img not found"
                      />
                    </div>
                    <div>
                      <Magnifier
                        zoomFactor={2}
                        mgShape="square"
                        mgWidth={120}
                        mgHeight={120}
                        src={x.imgSrc2}
                        alt="img not found"
                      />
                    </div>
                    <div>
                      <Magnifier
                        zoomFactor={2}
                        mgShape="square"
                        mgWidth={120}
                        mgHeight={120}
                        src={x.imgSrc3}
                        alt="img not found"
                      />
                    </div>
                  </Slider>
                </div>
                <hr />
                <div>
                  <h3
                    style={{
                      padding: "25px",
                      background: "#333",
                      color: "white",
                      marginBottom: "0",
                      border: "none",
                      letterSpacing: "1.2px"
                    }}
                  >
                    {x.name}{" "}
                  </h3>
                  <Button
                    style={{
                      padding: "30px",
                      fontSize: "150%",
                      background: "#333",
                      color: "white",
                      marginTop: "0",
                      width: "100%",
                      border: "none",
                      borderRadius: "0",
                      letterSpacing: "1.2px"
                    }}
                    id={"a" + x.id}
                  >
                    Specification <i className="fa">&#xf103;</i>
                  </Button>
                  <UncontrolledCollapse toggler={"#a" + x.id}>
                    <Card>
                      <CardBody style={{padding: "0"}}>
                        <CardSubtitle>{x.desc}</CardSubtitle>
                        <CardText>{""}</CardText>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                  <p
                    style={{
                      fontSize: "150%",
                      background: "#333",
                      color: "white",
                      margin: "0",
                      border: "none",
                      letterSpacing: "1.2px"
                    }}
                  >
                    <br />
                    Price: ${x.price}
                    <br />
                    <br />
                    <Button
                      color="success"
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "150%",
                        marginTop: "0"
                      }}
                      onClick={() => {
                        this.copyOfItemsHandlerWish(x);
                        this.props.copyItemWish();
                        this.props.orderINCWish();
                        this.props.onStoreWish();
                      }}
                    >
                      Wishlist
                    </Button>
                    <Button
                      onClick={() => {
                        this.copyOfItemsHandler(x);
                        this.props.copyItem();
                        this.props.orderINC();
                        this.props.onStore();
                      }}
                      color="primary"
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "150%",
                        marginTop: "0"
                      }}
                    >
                      Order
                    </Button>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );

    return (
      <div>
        <Jumbotron
          style={{
            background: "#02A9B9",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <div className="prodJumbo">
            <br />
            <br />
            <h2>Products</h2>
            <br />
            <p>
              Nunc scelerisque metus nec libero posuere, ut iaculis ex
              elementum. Curabitur mollis condimentum porta. Vivamus posuere
              dictum dui. Nulla a consequat enim. Donec ante felis, tincidunt
              sit amet ipsum at, cursus placerat purus. <br />
              <br />
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. <br />
              <br />
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Proin auctor, ante eu maximus volutpat,
              lacus nibh mollis ligula, at dapibus ex mi ut felis. Sed non
              convallis leo. Quisque condimentum urna nec justo imperdiet, vitae
              vehicula nulla bibendum. Cras commodo lorem id turpis bibendum, at
              egestas ligula placerat.
              <br />
              <br /> <br />
              <button className="subscribeBtn">Subscribe now</button>
              <br />
              <br />
            </p>
          </div>
        </Jumbotron>
        {listOfProdFirstHalf}
        <Jumbotron
          style={{
            background: "#333333",
            borderRadius: "0px",
            marginBottom: "0px"
          }}
        >
          <div className="prodJumbo">
            <br />

            <Container>
              <Row>
                <Col md="12">
                  <h2>Quality monitoring</h2>
                  <br />
                  <br />
                </Col>
                <Col md="6">
                  <ul>
                    <li>
                      Nunc scelerisque metus nec libero posuere, ut iaculis ex
                      elementum. Curabitur mollis condimentum porta.
                      <br />
                      <br />
                    </li>
                    <li>
                      Vivamus posuere dictum dui. Nulla a consequat enim. Donec
                      ante felis, tincidunt sit amet ipsum at, cursus placerat
                      purus. <br />
                      <br />
                    </li>
                    <li>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus.
                      <br />
                      <br />
                    </li>
                  </ul>
                </Col>
                <Col md="6">
                  <i id="iMonitoring" className="fa">
                    &#xf247;
                  </i>
                </Col>
              </Row>
            </Container>
          </div>
        </Jumbotron>
        {listOfProdSecondHalf}
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    wishlistCtr: state.counterWishlist,
    ordItm: state.orderedItem,
    ordLst: state.orderedItemList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    orderINC: () => dispatch({ type: "INC" }),
    orderINCWish: () => dispatch({ type: "INCWish" }),
    copyItem: () => dispatch({ type: "COPY", value: [...orderedProd] }),
    copyItemWish: () =>
      dispatch({ type: "COPYWish", value: [...orderedProdWish] }),
    onStore: () => dispatch({ type: "STR" }),
    onStoreWish: () => dispatch({ type: "STRWish" }),
    onDelete: (id, cn) => dispatch({ type: "DEL", elVal: id, priceA: cn })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
