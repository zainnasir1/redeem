/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import Header from "../../components/header/Header";
import "./GalleryDetail.css";
import img1 from "../../assets/Gallerydetail/01Asset14.png";

const GalleryDetail = () => {
  const [owner, setOwner] = useState(
    "93j4h5g6gk2kj34hg502234jhghjsbdskdfhxsdjsnd"
  );
  const [transactionHistory, setTransactionHistory] = useState([
    {
      type: "Sold",
      from: "0x631824",
      to: "0x631824",
      amount: "3.0ETH",
      txn: "0x631824",
    },
    {
      type: "Bid",
      from: "0x631824",
      to: "0x631824",
      amount: "2.5ETH",
      txn: "0x631824",
    },
    {
      type: "Offered",
      from: "0x631824",
      to: "0x631824",
      amount: "0.9ETH",
      txn: "0x631824",
    },
    {
      type: "Claimed",
      from: "0x631824",
      to: "0x631824",
      amount: "0.5ETH",
      txn: "0x631824",
    },
  ]);
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ padding: "0% 5% 6% 5%", backgroundColor: "#cccccc" }}
      >
        <Row className="gallery-detail-row">
          <Col lg="4" md="4" sm="6" xs="12" className="center_img">
            <img src={img1} alt="Mutemask" className="detail-img" />
          </Col>
          <Col lg="8" md="8" sm="12" xs="12" className="gallery-detail">
            <h3 className="d-flex justify-content-center">Title</h3>
            <span>
              <p>Owned by:&nbsp;</p>
              <span style={{ lineBreak: "anywhere" }}>{owner}</span>
            </span>
            <label className="transaction-label">Transaction History</label>
            <Table
              responsive
              borderless
              size="sm"
              className="transaction-table"
            >
              <thead>
                <tr>
                  <th>Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Amount</th>
                  <th>Txn</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((trh, i) => (
                  <tr
                    key={i}
                    className={
                      trh.type === "Sold"
                        ? "sold"
                        : trh.type === "Bid"
                        ? "bid"
                        : trh.type === "Offered"
                        ? "offered"
                        : trh.type === "Claimed"
                        ? "claimed"
                        : ""
                    }
                  >
                    <td
                      style={{
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px",
                      }}
                    >
                      {trh.type}
                    </td>
                    <td>{trh.from}</td>
                    <td>{trh.to}</td>
                    <td>{trh.amount}</td>
                    <td
                      style={{
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                      }}
                    >
                      {trh.txn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default GalleryDetail;
