import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Items = () => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <Card.Img
            style={{ width: "252px" }}
            className="img-item"
            variant="top"
            src="img/Zero.png"
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div className="item-title">وجبة الفطار</div>
              <div className="item-price">50 جنية</div>
            </Card.Title>
            <Card.Text className="py-2">
              <div className="item-desc">
                وصف وجبة الفطار نلالتراتلرﻻتئؤﻻرت بﻻيتبريئتن
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Items;
