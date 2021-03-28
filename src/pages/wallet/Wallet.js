import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Header from "../../components/header/Header";
import "../gallery/Gallery.css";
import img1 from "../../assets/Wallet/02Asset14.png";
import img2 from "../../assets/Gallery/01Asset11.png";

const Wallet = () => {
  const [ownedMutemasks, setOwnedMutemasks] = useState(5);
  const [yourWallet, setYourWallet] = useState(
    "0nd0232n3i323lg34c23l43523428bgaow2322h3l23kjd"
  );
  const [muteMasksData, setMuteMasksData] = useState([
    {
      img: img1,
      acquisitionPrice: "7.05ETH",
      asquisitionDate: "Mar 20, 2021",
      txn: "0x3e73d09...2f68de462",
      maskState: "black & white",
    },
    {
      img: img1,
      acquisitionPrice: "7.05ETH",
      asquisitionDate: "Mar 20, 2021",
      txn: "0x3e73d09...2f68de462",
      maskState: "black & white",
    },
    {
      img: img2,
      acquisitionPrice: "7.05ETH",
      asquisitionDate: "Mar 20, 2021",
      txn: "0x3e73d09...2f68de462",
      maskState: "colored",
    },
    {
      img: img2,
      acquisitionPrice: "7.05ETH",
      asquisitionDate: "Mar 20, 2021",
      txn: "0x3e73d09...2f68de462",
      maskState: "colored",
    },
    {
      img: img2,
      acquisitionPrice: "7.05ETH",
      asquisitionDate: "Mar 20, 2021",
      txn: "0x3e73d09...2f68de462",
      maskState: "colored",
    },
  ]);

  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ padding: "0 4%", backgroundColor: "#f9b9b9" }}
      >
        <div className="mask-wallet">
          <span>
            <p>Your Wallet:</p>&nbsp;
            <span style={{ lineBreak: "anywhere" }}>{yourWallet}</span>
          </span>
          <span>
            <p>Owned Mutemasks:</p>&nbsp;{ownedMutemasks}
          </span>
        </div>
        <Row>
          {muteMasksData.map((muteMasks) => (
            <>
              <Col
                lg="3"
                md="4"
                sm="6"
                xs="12"
                className={
                  muteMasks.maskState === "black & white"
                    ? "wallet"
                    : "wallet m-t-12"
                }
              >
                {muteMasks.maskState === "black & white" ? (
                  <Button className="redeem-btn">Redeem Colored Version</Button>
                ) : (
                  ""
                )}
                <img
                  src={muteMasks.img}
                  alt="Mutemask"
                  className="wallet-img"
                />
                <div className="cards-info">
                  <span>
                    Acquisition Price:&nbsp;{muteMasks.acquisitionPrice}
                  </span>
                  <span>
                    Acquisition Date:&nbsp;{muteMasks.asquisitionDate}
                  </span>
                  <span>Txn:&nbsp;{muteMasks.txn}</span>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  );
};
export default Wallet;
