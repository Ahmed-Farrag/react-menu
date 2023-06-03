import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Items = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="mb-3">
              <Card
                className="d-flex flex-row"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <Card.Img
                  style={{ width: "252px" }}
                  className="img-item"
                  variant="top"
                  src={item.imgUrl}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price} </div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-desc">{item.desc}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
};

export default Items;
