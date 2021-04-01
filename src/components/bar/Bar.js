/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";

const Bar = (props) => {
  const { progress, data } = props;

  return (
    <Row>
      <Col className="ml-2">
        <div
          className="row container-row mt-5 pl-2 pr-2"
          style={{ position: "relative", margin: "0 auto" }}
        >
          <div
            className="row pl-2 pr-2"
            style={{ height: "38px", width: "100% " }}
          >
            {data &&
              data.map((ele, i) => {
                return (
                  <Fragment key={i}>
                    <div style={{ ...ele, position: "relative" }}>
                      <div style={{ position: "absolute", top: 40, left: 0 }}>
                        {ele.value}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
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
                width: progress + "%",
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <div className="position-relative">
                <FiMapPin style={{ fontSize: "32px" }} />
                <div style={{ position: "absolute", top: -15, right: -10 }}>
                  {progress}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Bar;
