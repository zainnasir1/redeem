/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";

const Bar = (props) => {
  const { progress, data, height } = props;

  return (
    <Row>
      <Col xs="12" className="ml-2">
        <div
          className="row container-row pl-2 pr-2"
          style={{ position: "relative" }}
        >
          <div
            className="row pl-2 pr-2"
            style={{ height: "38px", width: "100% " }}
          >
            {data &&
              data.map((ele, i) => {
                return (
                  <Fragment key={i}>
                    <div
                      style={{ ...ele, position: "relative", height: height }}
                    >
                      <div className="hidden-value-div">{ele.value}</div>
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
              right: "24px",
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
                <FiMapPin className="value-indicator" />
                <div className="value">{progress}</div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Bar;
