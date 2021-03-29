import React, { useState } from "react";

const Popup = () => {
  const [mintingFee, setMintingFee] = useState();
  const [coloringFee, setcoloringFee] = useState();
  const [bandwMint, setBandwMint] = useState();
  const [coloredMinted, setColoredMinted] = useState();
  const [highestPrice, setHighestPrice] = useState();
  const [averagePrice, setAveragePrice] = useState();
  return (
    <div
      style={{
        backgroundColor: "red",
        position: "fixed",
        bottom: "10px",
        right: "4px",
        height: "100px",
        width: "100px",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            backgroundColor: "black",
          }}
        >
          <div className="popup-head"></div>
          <div className="popup-body">
            <div>
              <span></span>
            </div>
          </div>
        </div>
        <button>Stats</button>
      </div>
    </div>
  );
};
export default Popup;
