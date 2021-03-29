import React, { Fragment, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Mint.css";
import Header from "../../components/header/Header";
// import img1 from "../../assets/Mint/01Asset17.png";
import img2 from "../../assets/Mint/01Asset14.png";
import { FiMapPin } from "react-icons/fi";
import data from "./data";

const Mint = () => {
  const [noOfHidden, setNoOfHidden] = useState(0);
  const [mints, setMints] = useState();

  useEffect(() => {
    setMints(data.mintData);
  }, []);

  const hide = (selectedBox) => {
    var newMintdata = mints.map((ele) =>
      ele.id === selectedBox.id ? { ...ele, status: "hide" } : { ...ele }
    );
    var countHidden = mints.filter((ele) => ele.status === "hide");

    setNoOfHidden(countHidden.length);
    setMints(newMintdata);
    console.log("selecedBox: ", countHidden.length);
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Row>
          <Col lg="8">
            <div className="row mint-bg">
              <div className="col-md-6">
                <div className="row boxes-container">
                  {mints &&
                    mints.slice(0, 50).map((el) => {
                      if (el.isSpaces) {
                        return (
                          <div
                            key={el.id}
                            className="outerdiv"
                            style={{
                              width: 40 * (el.spaces + 1),
                              height: 40,
                              display: "flex",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <div
                              className="outerdiv"
                              style={{
                                width: 40,
                                height: 40,
                              }}
                            >
                              {el && el.status === "show" && (
                                <div
                                  onClick={() => hide(el)}
                                  className="innerdiv"
                                  style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: el.bgColor,
                                    color: "#fff",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {el.value}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="outerdiv"
                            style={{ width: 40, height: 40 }}
                          >
                            {el && el.status === "show" && (
                              <div
                                onClick={() => hide(el)}
                                className="innerdiv"
                                style={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: el.bgColor,
                                  color: "#fff",
                                  fontWeight: "500",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {el.value}
                              </div>
                            )}
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="row "
                  style={{ margin: "31.1% 0% 0% 0%", padding: "0% 21% 0% 16%" }}
                >
                  {mints &&
                    mints.slice(50, 100).map((el) => {
                      if (el.isSpaces) {
                        // var arrSpaces = new Array(el.spaces).fill(" ");
                        // console.log("h:", arrSpaces.length);
                        return (
                          <div
                            key={el.id}
                            className="outerdiv"
                            style={{
                              width: 40 * (el.spaces + 1),
                              height: 40,
                              display: "flex",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <div
                              className="outerdiv"
                              style={{
                                width: 40,
                                height: 40,
                              }}
                            >
                              {el && el.status === "show" && (
                                <div
                                  onClick={() => hide(el)}
                                  className="innerdiv"
                                  style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: el.bgColor,
                                    color: "#fff",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {el.value}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className="outerdiv"
                            style={{ width: 40, height: 40 }}
                          >
                            {el && el.status === "show" && (
                              <div
                                onClick={() => hide(el)}
                                className="innerdiv"
                                style={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: el.bgColor,
                                  color: "#fff",
                                  fontWeight: "500",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {el.value}
                              </div>
                            )}
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="minting-instructions-div">
              <img
                src={img2}
                alt="Minting Instructions"
                className="mint-img minting-instructions-img"
              />
              <div>
                <p>
                  <b>100</b>
                  <br />
                  <b>mutemasks</b> have been created,
                  <br />
                  each of them has been assigned to
                  <br />
                  a specific number displayed in the
                  <br />
                  frame on the left.
                </p>
                <p>
                  Redeeming a number grants you with
                  <br />
                  an <b>awe-inspiring</b> mutemask,
                  <br />
                  which will be revealed after the
                  <br />
                  minting has been completed.
                </p>
                <p>
                  Only big colored boxes are
                  <br />
                  eligible for minting. After the
                  <br />
                  process starts, boxes being minted
                  <br />
                  will become unavailable by
                  <br />
                  having their <b>numbers disappeared.</b>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="ml-2">
            {/* <div
              style={{
                height: "38px",
                marginTop: "75px",
                marginBottom: "32px",
                border: "4px solid black",
              }}
            ></div> */}
            <div
              className="row container-row mt-5 pl-2 pr-2"
              style={{ position: "relative", margin: "0 auto" }}
            >
              <div
                className="row pl-2 pr-2"
                style={{ height: "38px", width: "100% " }}
              >
                <div
                  style={{
                    width: "4%",
                    backgroundColor: "#f2f2f2",
                    border: "2px solid #f2f2f2",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "5%",
                    backgroundColor: "#e6e6e6",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "7%",
                    backgroundColor: "#cccccc",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "20%",
                    backgroundColor: "#b3b3b3",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "25%",
                    backgroundColor: "#999999",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "30%",
                    backgroundColor: "#808080",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "3%",
                    backgroundColor: "#666666",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "3%",
                    backgroundColor: "#4d4d4d",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "2%",
                    backgroundColor: "#333333",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "1%",
                    backgroundColor: "#1a1a1a",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
              </div>
              <div
                className="row row-absolute pr-2 pl-2"
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: 0,
                  width: "100%",
                }}
              >
                <div
                  className="row-dynamic-width"
                  style={{
                    height: "38px",
                    width: noOfHidden + "%",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <div className="absolute-icon">
                    <FiMapPin style={{ fontSize: "32px" }} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="ml-2">
            {/* <div
              style={{
                height: "38px",
                marginTop: "75px",
                marginBottom: "32px",
                border: "4px solid black",
              }}
            ></div> */}
            <div
              className="row container-row mt-5 pl-2 pr-2"
              style={{ position: "relative", margin: "0 auto" }}
            >
              <div
                className="row pl-2 pr-2"
                style={{ height: "38px", width: "100% " }}
              >
                <div
                  style={{
                    width: "4%",
                    backgroundColor: "#f0a6a7",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "5%",
                    backgroundColor: "#eb8283",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "7%",
                    backgroundColor: "#e86e68",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "20%",
                    backgroundColor: "#dd3c33",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "25%",
                    backgroundColor: "#f19a24",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "30%",
                    backgroundColor: "#fbe323",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "3%",
                    backgroundColor: "#007cba",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "3%",
                    backgroundColor: "#5caed3",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "2%",
                    backgroundColor: "#9ec87f",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
                <div
                  style={{
                    width: "1%",
                    backgroundColor: "#fae966",
                    border: "2px solid #fff",
                    height: "40px",
                  }}
                ></div>
              </div>
              <div
                className="row row-absolute pr-2 pl-2"
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: 0,
                  width: "100%",
                }}
              >
                <div
                  className="row-dynamic-width"
                  style={{
                    height: "38px",
                    width: noOfHidden + "%",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <div className="absolute-icon">
                    <FiMapPin style={{ fontSize: "32px" }} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Mint;
