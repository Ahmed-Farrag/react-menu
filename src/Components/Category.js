import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCategory }) => {
  // to filter by cat
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <div>
                <Button
                  onClick={() => onFilter(cat)}
                  variant="outline-primary mx-2"
                >
                  {cat}
                </Button>
              </div>
            );
          })
        ) : (
          <h1>لا يوجد تصنيفات</h1>
        )}
      </Col>
    </Row>
  );
};

export default Category;
