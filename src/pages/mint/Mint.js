import React, { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Mint.css";
import Header from "../../components/header/Header";
import img1 from "../../assets/Mint/01Asset17.png";
import img2 from "../../assets/Mint/01Asset14.png";

const Mint = () => {
  const [mints, setMints] = useState([
    {
      id: "1",
      value: "001",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: true,
      spaces: 4,
    },
    {
      id: "2",
      value: "002",
      status: "show",
      bgColor: "#00a8a8",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "3",
      value: "003",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "4",
      value: "004",
      status: "show",
      bgColor: "#002a38",
      isSpaces: true,
      spaces: 2,
    },
    {
      id: "5",
      value: "005",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "6",
      value: "006",
      status: "show",
      bgColor: "#8d0015",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "7",
      value: "007",
      status: "show",
      bgColor: "#ffd595",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "8",
      value: "008",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "9",
      value: "009",
      status: "show",
      bgColor: "#ff8332",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "10",
      value: "010",
      status: "show",
      bgColor: "#fe3f2e",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "11",
      value: "011",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "12",
      value: "012",
      status: "show",
      bgColor: "#002a38",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "13",
      value: "013",
      status: "show",
      bgColor: "#00a8a8",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "14",
      value: "014",
      status: "show",
      bgColor: "#002a38",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "15",
      value: "015",
      status: "show",
      bgColor: "#008892",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "16",
      value: "016",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "17",
      value: "017",
      status: "show",
      bgColor: "#ffd595",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "18",
      value: "018",
      status: "show",
      bgColor: "#8d0015",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "19",
      value: "019",
      status: "show",
      bgColor: "#00a8a8",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "20",
      value: "020",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "21",
      value: "021",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "22",
      value: "022",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "23",
      value: "023",
      status: "show",
      bgColor: "#00a8a8",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "24",
      value: "024",
      status: "show",
      bgColor: "#fe3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "25",
      value: "025",
      status: "show",
      bgColor: "#008892",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "26",
      value: "026",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "27",
      value: "027",
      status: "show",
      bgColor: "#008690",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "28",
      value: "028",
      status: "show",
      bgColor: "#002a38",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "29",
      value: "029",
      status: "show",
      bgColor: "#fea82c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "30",
      value: "030",
      status: "show",
      bgColor: "#ffd595",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "31",
      value: "031",
      status: "show",
      bgColor: "#002a38",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "32",
      value: "032",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "33",
      value: "033",
      status: "show",
      bgColor: "#00a8a8",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "34",
      value: "034",
      status: "show",
      bgColor: "#fcd293",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "35",
      value: "035",
      status: "show",
      bgColor: "#ff8332",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "36",
      value: "036",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "37",
      value: "037",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "38",
      value: "038",
      status: "show",
      bgColor: "#00a7a7",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "39",
      value: "039",
      status: "show",
      bgColor: "#8d0015",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "40",
      value: "040",
      status: "show",
      bgColor: "#002a38",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "41",
      value: "041",
      status: "show",
      bgColor: "#00a3a3",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "42",
      value: "042",
      status: "show",
      bgColor: "#ffd595",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "43",
      value: "043",
      status: "show",
      bgColor: "#ff3f2e",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "44",
      value: "044",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "45",
      value: "045",
      status: "show",
      bgColor: "#8d0015",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "46",
      value: "046",
      status: "show",
      bgColor: "#ffa92c",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "47",
      value: "047",
      status: "show",
      bgColor: "#00848e",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "48",
      value: "048",
      status: "show",
      bgColor: "#ff8332",
      isSpaces: true,
      spaces: 1,
    },
    {
      id: "49",
      value: "049",
      status: "show",
      bgColor: "#002a38",
      isSpaces: false,
      spaces: 0,
    },
    {
      id: "50",
      value: "050",
      status: "show",
      bgColor: "#fea82c",
      isSpaces: false,
      spaces: 0,
    },
    { id: "51", value: "051", status: "show", bgColor: "#ffa92c" },
    { id: "52", value: "052", status: "show", bgColor: "#002a38" },
    { id: "53", value: "053", status: "show", bgColor: "#ff8332" },
    { id: "54", value: "054", status: "show", bgColor: "#008892" },
    { id: "55", value: "055", status: "show", bgColor: "#fca72b" },
    { id: "56", value: "056", status: "show", bgColor: "#8d0015" },
    { id: "57", value: "057", status: "show", bgColor: "#ffa92c" },
    { id: "58", value: "058", status: "show", bgColor: "#ff3f2e " },
    { id: "59", value: "059", status: "show", bgColor: "#ffd595 " },
    { id: "60", value: "060", status: "show", bgColor: "#49a7ca" },
    { id: "61", value: "061", status: "show", bgColor: "#002a38" },
    { id: "62", value: "062", status: "show", bgColor: "#8d0015" },
    { id: "63", value: "063", status: "show", bgColor: "#00a3a3" },
    { id: "64", value: "064", status: "show", bgColor: "#ffa92c" },
    { id: "65", value: "065", status: "show", bgColor: "#ff3f2e" },
    { id: "66", value: "066", status: "show", bgColor: "#ff8332" },
    { id: "67", value: "067", status: "show", bgColor: "#fcd293" },
    { id: "68", value: "068", status: "show", bgColor: "#00a8a8" },
    { id: "69", value: "069", status: "show", bgColor: "#ff3f2e" },
    { id: "70", value: "070", status: "show", bgColor: "#002a38" },
    { id: "71", value: "071", status: "show", bgColor: "#fcd293" },
    { id: "72", value: "072", status: "show", bgColor: "#fca72b" },
    { id: "73", value: "073", status: "show", bgColor: "#002a38" },
    { id: "74", value: "074", status: "show", bgColor: "#499cc2" },
    { id: "75", value: "075", status: "show", bgColor: "#ffa92c" },
    { id: "76", value: "076", status: "show", bgColor: "#008892" },
    { id: "77", value: "077", status: "show", bgColor: "#fc3e2d" },
    { id: "78", value: "078", status: "show", bgColor: "#00a8a8" },
    { id: "79", value: "079", status: "show", bgColor: "#ff3f2e" },
    { id: "80", value: "080", status: "show", bgColor: "#ffa92c" },
    { id: "81", value: "081", status: "show", bgColor: "#ff3f2e" },
    { id: "82", value: "082", status: "show", bgColor: "#00a8a8" },
    { id: "83", value: "083", status: "show", bgColor: "#8d0015" },
    { id: "84", value: "084", status: "show", bgColor: "#ffd595" },
    { id: "85", value: "085", status: "show", bgColor: "#ff3f2e" },
    { id: "86", value: "086", status: "show", bgColor: "#008892" },
    { id: "87", value: "087", status: "show", bgColor: "#002a38" },
    { id: "88", value: "088", status: "show", bgColor: "#00a4a4" },
    { id: "89", value: "089", status: "show", bgColor: "#002a38" },
    { id: "90", value: "090", status: "show", bgColor: "#fea82c" },
    { id: "91", value: "091", status: "show", bgColor: "#f43c2c" },
    { id: "92", value: "092", status: "show", bgColor: "#ff8332" },
    { id: "93", value: "093", status: "show", bgColor: "#f83d2d" },
    { id: "94", value: "094", status: "show", bgColor: "#ffd595" },
    { id: "95", value: "095", status: "show", bgColor: "#8d0015" },
    { id: "96", value: "096", status: "show", bgColor: "#ffa92c" },
    { id: "97", value: "097", status: "show", bgColor: "#002a38" },
    { id: "98", value: "098", status: "show", bgColor: "#ffa92c" },
    { id: "99", value: "099", status: "show", bgColor: "#00a8a8" },
    { id: "100", value: "100", status: "show", bgColor: "#fea82c" },
  ]);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Row>
          <Col lg="8">
            {/* <img src={img1} alt="Mint" className="mint-img" /> */}
            <div className="row mint-bg">
              <div className="col-md-6">
                <div className="row boxes-container">
                  {mints.slice(0, 50).map((el) => {
                    if (el.isSpaces) {
                      var arrSpaces = new Array(el.spaces).fill(" ");
                      // console.log("new: ", el.spaces);
                      console.log("h:", arrSpaces.length);
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
                            <div
                              className="innerdiv"
                              style={{
                                width: 40,
                                height: 40,
                                backgroundColor: el.bgColor,
                              }}
                            >
                              {el.value}
                            </div>
                          </div>
                          {/* {arrSpaces.map((sp, i) => {
                            const isLastIndex = arrSpaces.length - 1 === i;
                            if (isLastIndex) {
                              return (
                                <Fragment key={sp.id + i}>
                                  <div
                                    className="outerdiv"
                                    style={{ width: 40, height: 40 }}
                                  >
                                    <div
                                      className="lastspace"
                                      style={{
                                        width: 40,
                                        height: 40,
                                      }}
                                    ></div>
                                  </div>
                                  <div
                                    className="outerdiv"
                                    style={{ width: 40, height: 40 }}
                                  >
                                    <div
                                      className="innerdiv"
                                      style={{
                                        width: 40,
                                        height: 40,
                                        backgroundColor: el.bgColor,
                                      }}
                                    >
                                      {el.value}
                                    </div>
                                  </div>
                                </Fragment>
                              );
                            } else {
                              return (
                                <div
                                  className="outerdiv"
                                  style={{ width: 40, height: 40 }}
                                >
                                  <div
                                    className="innerSapce"
                                    style={{
                                      width: 40,
                                      height: 40,
                                    }}
                                  ></div>
                                </div>
                              );
                            }
                          })} */}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="outerdiv"
                          style={{ width: 40, height: 40 }}
                        >
                          <div
                            className="innerdiv"
                            style={{
                              width: 40,
                              height: 40,
                              backgroundColor: el.bgColor,
                            }}
                          >
                            {el.value}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="col-md-6"></div>
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
      </div>
    </>
  );
};
export default Mint;
