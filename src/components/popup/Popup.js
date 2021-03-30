/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Popup.css";
import img1 from "../../assets/Home1/01Asset74.png";
import img2 from "../../assets/Home1/01Asset75.png";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
// import * as IoIcons from "react-icons/io";
// import { IoListCircleOutline } from "react-icons/io";

const Popup = () => {
  const [mintingFee, setMintingFee] = useState(3.0);
  const [coloringFee, setcoloringFee] = useState(3.0);
  const [bandwMint, setBandwMint] = useState();
  const [coloredMinted, setColoredMinted] = useState();
  const [highestPrice, setHighestPrice] = useState();
  const [averagePrice, setAveragePrice] = useState();
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "4px",
      }}
    >
      <div style={{ position: "relative" }}>
        <div className="popup">
          <div className="popup-head">
            <div
              className="d-flex align-items-center "
              style={{ justifyContent: "space-around" }}
            >
              <span>Statistics</span>
              <img
                src={img1}
                alt="twit"
                className="stats-img"
                style={{ marginLeft: "1rem" }}
              />
              <img src={img2} alt="dots" className="stats-img" />
              <BsBoxArrowInDownLeft className="stats-img" />
            </div>
          </div>
          <div className="popup-body">
            <div>
              <div className="d-flex">
                {/* <IoIcons.IoListCircleOutline className="mr-2" /> */}
                <span>Minting fee</span>
                <span>{mintingFee}&nbsp;ETH</span>
              </div>
              <div>
                <span>Coloring fee</span>
                <span>{coloringFee}&nbsp;ETH</span>
              </div>
            </div>
          </div>
        </div>
        <button>Stats</button>
      </div>
    </div>
  );
};
export default Popup;
