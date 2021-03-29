/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Home.css";
import Header from "../../components/header/Header";
import img1 from "../../assets/Home1/01Asset78.png";
import img2 from "../../assets/Home1/01Asset79.png";
import img3 from "../../assets/Home1/01Asset80.png";
import img4 from "../../assets/Home1/01Asset81.png";
import img5 from "../../assets/Home1/01Asset83.png";
import img6 from "../../assets/Home1/01Asset85.png";
import img7 from "../../assets/Home1/01Asset82.png";
import img8 from "../../assets/Home1/01Asset84.png";
import img9 from "../../assets/Home1/01Asset86.png";

import secimg1 from "../../assets/Home2/001.png";
import secimg2 from "../../assets/Home2/002.png";
import secimg3 from "../../assets/Home2/003.png";
import secimg from "../../assets/Home2/005.png";

import secimg4 from "../../assets/Home3/01Asset99.png";
import secimg5 from "../../assets/Home3/01Asset100.png";
import secimg6 from "../../assets/Home3/01Asset101.png";
import secimg7 from "../../assets/Home3/01Asset102.png";
import secimg8 from "../../assets/Home3/01Asset103.png";

import secimg9 from "../../assets/Home4/01Asset108.png";
import secimg10 from "../../assets/Home4/01Asset109.png";
import secimg11 from "../../assets/Home4/01Asset110.png";
import secimg12 from "../../assets/Home4/01Asset111.png";
import secimg13 from "../../assets/Home4/01Asset112.png";
import secimg14 from "../../assets/Home4/01Asset113.png";

import secimg15 from "../../assets/Home5/01Asset117.png";
import secimg16 from "../../assets/Home5/01Asset118.png";
import secimg17 from "../../assets/Home6/01Asset119.png";
import secimg18 from "../../assets/Home6/01Asset122.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero-section container-fluid">
        <Row>
          <Col lg="5" md="5" sm="5" xs="5">
            <Row>
              <Col lg="4" md="4" sm="4" xs="4">
                <img
                  src={img1}
                  alt="Asset1"
                  className="home-img2 display"
                  style={{ padding: "60% 0%" }}
                />
              </Col>
              <Col lg="8" md="8" sm="8" xs="8">
                <img
                  src={img2}
                  alt="Asset2"
                  className="home-img2"
                  style={{ padding: "16% 14% 3%" }}
                />
                <img src={img3} alt="Asset3" className="home-img2" />
              </Col>
            </Row>
          </Col>
          <Col lg="7" md="7" sm="7" xs="7">
            <Row>
              <Col lg="5" md="5" sm="5" xs="5">
                <img src={img4} alt="Asset4" className="home-img2" />
              </Col>
              <Col lg="3" md="3" sm="3" xs="3">
                <img src={img5} alt="Asset5" className="home-img2" />
              </Col>
              <Col lg="4" md="4" sm="4" xs="4">
                <img src={img6} alt="Asset6" className="home-img2" />
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="3" sm="3" xs="3">
                <img src={img7} alt="Asset7" className="home-img2" />
              </Col>
              <Col lg="6" md="6" sm="6" xs="6">
                <img src={img8} alt="Asset8" className="home-img2" />
              </Col>
              <Col lg="3" md="3" sm="3" xs="3">
                <img src={img9} alt="Asset9" className="home-img2" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="section2">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="4" xs="4">
              <img src={secimg1} alt="Frame 1" className="home-img2" />
            </Col>
            <Col lg="4" md="4" sm="4" xs="4">
              <img src={secimg2} alt="Frame 2" className="home-img2" />
            </Col>
            <Col lg="4" md="4" sm="4" xs="4">
              <img src={secimg3} alt="Frame 3" className="home-img2" />
            </Col>
          </Row>
          <Row>
            <Col className="text-center ">
              <span className="section2-text">
                A unique digital art collection living in the blockchain.
                <br />
                100 mutemasks to be distributed employing proof of ownership.
                <br />
                Hold...or sell to the best bidder.
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <Carousel interval={null} indicators={false}>
        <Carousel.Item>
          <div className="section3 container-fluid">
            <div className="inner-div ">
              <Row>
                <Col lg="3" md="3" sm="12" xs="12" className="img_center">
                  <img
                    src={secimg4}
                    alt="Asset 4"
                    className="home-img section3-img"
                  />
                </Col>
                <Col lg="9" md="9" sm="12" xs="12">
                  <Row>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderRight: "4px solid black" }}
                    >
                      <img
                        src={secimg5}
                        alt="Mute Masks"
                        className="text-img mutemask-img"
                      />
                    </Col>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div>
                        <span>
                          Mutemask is a new{" "}
                          <b>digital celebration of attires;</b>
                          <br />a rare collection of 100 -and only 100- masks
                          stored in the Ethereum
                          <br /> chain in the form of singular Non-Fungible
                          Tokens.
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderRight: "4px solid black" }}
                    >
                      <img
                        src={secimg6}
                        alt="About the Art"
                        className="text-img aboutart-img"
                      />
                    </Col>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1">
                        <span>
                          All Mutemasks are based on identifiable line paths
                          that create a<br />
                          bidimensional static and{" "}
                          <b>eye-appealing costume. </b>
                          Each mask leads to
                          <br />
                          an eye-to-eye interaction that brings out an unusual
                          but exciting
                          <br />
                          communication between the masterpiece and the
                          observer, disguising,
                          <br />
                          and exposing at the same time, strong emotions that
                          escape from the
                          <br />
                          closed boundaries of the frames.
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderRight: "4px solid black" }}
                    >
                      <img
                        src={secimg7}
                        alt="About the artist"
                        className="text-img aboutartist-img"
                      />
                    </Col>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1">
                        <span>
                          Mutemasks were commisioned to a visionary with a{" "}
                          <b>Phd in fine arts </b>who,
                          <br />
                          by now, wishes to remain anonymous. The artist
                          explores numerous
                          <br />
                          lines drawn layer by layer, that, combined with <br />
                          <b>vibrant live pigments,</b> cover the essence and
                          complexity of a modern
                          <br /> yet simple individual: "the way she is
                          captivated by the uniqueness of the
                          <br /> life of every human being."
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderRight: "4px solid black" }}
                    >
                      <img
                        src={secimg8}
                        alt="About the rarity"
                        className="text-img aboutrarity-img"
                      />
                    </Col>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1">
                        <span>
                          Mutemasks were created using a set items that give the
                          pieces a{" "}
                          <b>
                            touch <br />
                            of rarity;
                          </b>{" "}
                          such elements can be easily identified and are
                          categorized in the <br />
                          gallery section.
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="section4 container-fluid">
            <div className="section4-inner-div ">
              <Row>
                <Col lg="9" md="9" sm="12" xs="12">
                  <Row>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="text-direction">
                        <span>
                          Each mutemask is originated in{" "}
                          <b>black and white, </b>
                          which can be
                          <br />
                          immediately minted into a colored version. The minting
                          process of both
                          <br /> versions follow the same bonding curve.
                        </span>
                      </div>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderLeft: "4px solid black" }}
                    >
                      <img
                        src={secimg9}
                        alt="B&W vs Color"
                        className="text-img bwcolor-img"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1 text-direction">
                        <span>
                          Black and whitemasks will be open for redemption until
                          all arts are
                          <br />
                          minted. Beginning at <b>14:00 on April 1st (CST). </b>
                          As soon as you get your
                          <br />
                          minting ticket your B&W mask will be revealed in the
                          wallet section.
                        </span>
                      </div>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderLeft: "4px solid black" }}
                    >
                      <img
                        src={secimg10}
                        alt="B&W Minting"
                        className="text-img bwminting-img"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1 text-direction">
                        <span>
                          The distribution of black and white masks follows a
                          random process
                          <br />
                          where no one knows which mask will be assigned.{" "}
                          <b>
                            The user gets a
                            <br />
                            number{" "}
                          </b>
                          that instantly mints a random art.
                        </span>
                      </div>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderLeft: "4px solid black" }}
                    >
                      <img
                        src={secimg11}
                        alt="Random Issuance"
                        className="text-img randomissuance-img"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1 text-direction">
                        <span>
                          Colored masks minting process will also begin at{" "}
                          <b>
                            14:00 on April 1st
                            <br />
                            (CST){" "}
                          </b>
                          and will be open until all colored versions are
                          minted. There is no
                          <br />
                          randomization factor here as each B&W mask is a key
                          that grants the
                          <br />
                          acquisition option of the same mask in color.
                        </span>
                      </div>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderLeft: "4px solid black" }}
                    >
                      <img
                        src={secimg12}
                        alt="Colored Minting"
                        className="text-img coloredminting-img"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="9" md="9" sm="9" xs="9">
                      <div className="m-t-1 text-direction">
                        <span>
                          The authentic mutemask files are stored in the
                          Ethereum chain; what
                          <br /> you see on the site are simple shots of the
                          actual masks.{" "}
                          <b>
                            Each mask
                            <br />
                            is a unique token
                          </b>{" "}
                          to which you, and only you, have access.
                          <br />
                          0xc2c747e0f7XXXXXXXXXXXXXXXX657a7746928
                        </span>
                      </div>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      sm="3"
                      xs="3"
                      style={{ borderLeft: "4px solid black" }}
                    >
                      <img
                        src={secimg13}
                        alt="Smart Contract"
                        className="text-img smartcontract-img"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col lg="3" md="3" sm="12" xs="12" className="img_center">
                  <img
                    src={secimg14}
                    alt="Asset 4"
                    className="home-img section3-img"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="section5 container-fluid">
            <div className="section5-inner-div ">
              <Row className="section5-row">
                <Col lg="4" md="4 " sm="4" xs="6">
                  <img
                    src={secimg15}
                    alt="Black and white"
                    className="home-img "
                  />
                </Col>
                <Col lg="4" md="4 " sm="4" xs="6">
                  <img src={secimg16} alt="Colored" className="home-img " />
                </Col>
              </Row>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="section6 container-fluid">
        <div className="section6-inner-div ">
          <Row>
            <Col lg="8" md="8" sm="12" className="img_center">
              <img src={secimg17} alt="Black and white" className="home-img " />
            </Col>
            <Col lg="4" md="12" sm="12">
              <div className="bonding-curve-div">
                <img
                  src={secimg18}
                  alt="Bonding Curve"
                  className="text-img bonding-curve-img"
                />
                <div>
                  <p>
                    <b>A Bonding </b>curve has been
                    <br />
                    implemented to value all masks.
                    <br />
                    Starting with a rare of 1 ETH for
                    <br />
                    the first 2 NFT and ending at 16 ETH
                    <br />
                    for the final mask.
                    {/* <br /> */}
                  </p>
                  <p>
                    Numbers within each circle
                    <br />
                    represents the <b>quanity of masks</b>
                    <br />
                    being offered at the rate (in ETH) pointed
                    <br />
                    above such circles.
                    {/* <br /> */}
                  </p>
                  <p>
                    The <b>same bonding curve </b>is
                    <br />
                    employed to follow the minting of
                    <br />
                    the colored masks.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Home;
