/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Popup.css";
import img1 from "../../assets/Home1/01Asset74.png";
import img2 from "../../assets/Home1/01Asset75.png";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
// import * as IoIcons from "react-icons/io";
import { BiAlbum, BiTrendingUp } from "react-icons/bi";
import { BsBarChartFill, BsInfoCircleFill } from "react-icons/bs";

const feesdata = {
  mintingFee: 3,
  coloringFee: 5,
  bwMinted: 7,
  coloredMinted: 10,
  highestPrice: 90,
  averagePrice: 20,
};
const Popup = () => {
  // const [mintingFee, setMintingFee] = useState(3.0);
  // const [coloringFee, setcoloringFee] = useState(3.0);
  // const [bandwMint, setBandwMint] = useState();
  // const [coloredMinted, setColoredMinted] = useState();
  // const [highestPrice, setHighestPrice] = useState();
  // const [averagePrice, setAveragePrice] = useState();
  const [fees, setfees] = useState();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setfees(feesdata);
  }, []);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const mintingFee = fees?.mintingFee;
  const coloringFee = fees?.coloringFee;
  const bwMinted = fees?.bwMinted;
  const coloredMinted = fees?.coloredMinted;
  const highestPrice = fees?.highestPrice;
  const averagePrice = fees?.averagePrice;
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "4px",
      }}
    >
      <div style={{ position: "relative" }}>
        {showPopup && (
          <div className="popup">
            <div className="popup-head">
              <div
                className="d-flex align-items-center mb-3"
                style={{ justifyContent: "space-between" }}
              >
                <span>Statistics</span>
                <div>
                  <img src={img1} alt="twit" className="stats-img" />
                  <img src={img2} alt="dots" className="stats-img" />
                  <BsBoxArrowInDownLeft
                    className="stats-img"
                    onClick={closePopup}
                  />
                </div>
              </div>
            </div>
            <div className="popup-body p-2">
              <div>
                <div className="d-flex mt-1 align-items-center mb-3">
                  <div>
                    <BiAlbum className="m-2" fontSize={"24px"} />
                  </div>
                  <div style={{ width: "80%", paddingLeft: "4px" }}>
                    <div className="d-flex justify-content-between">
                      <div>Minting fee</div>
                      <div>{mintingFee}&nbsp;ETH</div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginTop: "-1.5px" }}
                    >
                      <div>Coloring fee</div>
                      <div>{coloringFee}&nbsp;ETH</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-1 align-items-center mb-3">
                  <div>
                    <BsBarChartFill className="m-2" fontSize={"24px"} />
                  </div>
                  <div style={{ width: "80%", paddingLeft: "4px" }}>
                    <div className="d-flex justify-content-between">
                      <div>B&W Minted</div>
                      <div>{bwMinted}&nbsp;ETH</div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginTop: "-1.5px" }}
                    >
                      <div>Colored Minted</div>
                      <div>{coloredMinted}&nbsp;ETH</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-1 align-items-center">
                  <div>
                    <BiTrendingUp className="m-2" fontSize={"24px"} />
                  </div>
                  <div style={{ width: "80%", paddingLeft: "4px" }}>
                    <div className="d-flex justify-content-between">
                      <div>Highest Price</div>
                      <div>{highestPrice}&nbsp;ETH</div>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginTop: "-1.5px" }}
                    >
                      <div>Average Price</div>
                      <div>{averagePrice}&nbsp;ETH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <button className="stats-btn" onClick={openPopup}>
          Live Stats <BsInfoCircleFill color="red" />
        </button>
      </div>
    </div>
  );
};
export default Popup;
