import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Gallery.css";
import galleryData from "../../config";
import prod from "../../assets/Gallery/01Asset11.png";

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ padding: "3% 4%" }}>
        <Row>
          {galleryData.map((data) => (
            <Col lg="3" md="4" sm="6" xs="6" className="gallery">
              <Link to={`/gallery-detail/${data.id}`}>
                <img src={prod} alt={data.title} className="gallery-img" />
              </Link>
              <div className="cards-info">
                <span>Last Price:&nbsp;{data.lastPrice}</span>
                <span>Date:&nbsp;{data.date}</span>
                <span style={{ wordBreak: "break-all" }}>
                  Owner:&nbsp;{data.owner}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default Gallery;
