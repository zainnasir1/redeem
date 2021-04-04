import React, { Fragment, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Mint.css";
import Header from "../../components/header/Header";
// import img1 from "../../assets/Mint/01Asset17.png";
import img2 from "../../assets/Mint/01Asset14.png";
import img1 from "../../assets/Mint/bg.jpeg";
import data from "./data";
import Bar from "../../components/bar/Bar";

const dataBW = [
  {
    width: "4%",
    backgroundColor: "#f2f2f2",
    border: "2px solid #f2f2f2",
    value: 2,
  },
  {
    width: "5%",
    backgroundColor: "#e6e6e6",
    border: "2px solid #fff",
    value: 5,
  },
  {
    width: "7%",
    backgroundColor: "#cccccc",
    border: "2px solid #fff",
    value: 9,
  },
  {
    width: "20%",
    backgroundColor: "#b3b3b3",
    border: "2px solid #fff",
    value: 14,
  },
  {
    width: "25%",
    backgroundColor: "#999999",
    border: "2px solid #fff",
    value: 34,
  },
  {
    width: "30%",
    backgroundColor: "#808080",
    border: "2px solid #fff",
    value: 59,
  },
  {
    width: "3%",
    backgroundColor: "#666666",
    border: "2px solid #fff",
    value: 94,
  },
  {
    width: "3%",
    backgroundColor: "#4d4d4d",
    border: "2px solid #fff",
    value: 97,
  },
  {
    width: "2%",
    backgroundColor: "#333333",
    border: "2px solid #fff",
    value: 99,
  },
  {
    width: "1%",
    backgroundColor: "#1a1a1a",
    border: "2px solid #fff",
    value: 100,
  },
];
const dataColored = [
  {
    width: "4%",
    backgroundColor: "#f0a6a7",
    border: "2px solid #fff",
  },
  {
    width: "5%",
    backgroundColor: "#eb8283",
    border: "2px solid #fff",
  },
  {
    width: "7%",
    backgroundColor: "#e86e68",
    border: "2px solid #fff",
  },
  {
    width: "20%",
    backgroundColor: "#dd3c33",
    border: "2px solid #fff",
  },
  {
    width: "25%",
    backgroundColor: "#f19a24",
    border: "2px solid #fff",
  },
  {
    width: "30%",
    backgroundColor: "#fbe323",
    border: "2px solid #fff",
  },
  {
    width: "3%",
    backgroundColor: "#007cba",
    border: "2px solid #fff",
  },
  {
    width: "3%",
    backgroundColor: "#5caed3",
    border: "2px solid #fff",
  },
  {
    width: "2%",
    backgroundColor: "#9ec87f",
    border: "2px solid #fff",
  },
  {
    width: "1%",
    backgroundColor: "#fae966",
    border: "2px solid #fff",
  },
];
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
    setMints(newMintdata);
    var countHidden = newMintdata.filter((ele) => ele.status === "hide");
    setNoOfHidden(countHidden.length);
  };
  return (
    <>
      <Header />
      <div className="container-fluid ">
        <Row className="outer-row">
          <Col lg="8" className="overflow-bg">
            {/* <div> */}
            <div className="row mint-bg mint-bg-img ">
              <img src={img1} alt="Mint Background" className="mint-bg-img" />
              <div className=" boxes-container" id={"boxes-container"}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {mints &&
                    mints.map((el) => {
                      return (
                        <div key={el.id} className="outer-box">
                          {el && el.status === "show" && (
                            <div
                              onClick={() => hide(el)}
                              className="inner-box"
                              style={{
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
                    })}
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="desktop-mint">
            <div className="d-flex align-items-center">
              <div className="minting-instructions-div ">
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
            </div>
          </Col>
          <Col lg="4" className="mobile-mint">
            <div className="d-flex align-items-center">
              <div className="minting-instructions-div">
                <img
                  src={img2}
                  alt="Minting Instructions"
                  className="mint-img-mobile"
                />
                <div className="min-text">
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
            </div>
          </Col>
        </Row>
        <div className="bars-padding bar-bw-pt">
          <Bar progress={noOfHidden} data={dataBW} height={28} />
        </div>
        <div className="bars-padding bar-color-pt">
          <Bar data={dataColored} progress={0} height={28} />
          <div className="colored-label">Colored Minted</div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default Mint;
