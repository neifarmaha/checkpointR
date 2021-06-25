import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ title, handleChange, ratingChanged }) => {
  return (
    <Navbar bg="black" variant="dark" className="d-flex justify-content-around">
      <Navbar.Brand
        href="#home"
        style={{
          fontSize: "1.9rem",
          color: "#E6EE9C",
          fontFamily: "Fantasy",
          letterSpacing: "6px",
        }}
      >
        MOVIES & SERIES
      </Navbar.Brand>
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 mt-2"
            onChange={handleChange}
            value={title}
          />
        </Form>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
          isHalf={true}
        />
      </div>
    </Navbar>
  );
};

export default Filter;
