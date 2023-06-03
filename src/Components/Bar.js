import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

const Bar = ({ filterBySearch }) => {
  const [searchVal, setSearchVal] = useState("");
  const onSearch = (word) => {
    filterBySearch(searchVal);
    setSearchVal("");
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="بحث ..."
              className="mx-2"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <Button onClick={() => onSearch()} variant="outline-primary">
              ابحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bar;
