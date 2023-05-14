import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Category = () => {
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <Button variant="outline-primary mx-2">الكل</Button>
          <Button variant="outline-primary mx-2">فطار</Button>
          <Button variant="outline-primary mx-2">غداء</Button>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
