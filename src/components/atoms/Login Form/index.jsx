import React from "react";
import "./style.css";
import Button from "../Button";
import Form from "react-bootstrap/Form";

const FormComponent = ({ action }) => {
  return (
    <>
      <div className="login-form">
        <Form className="login-form">
          <Form.Group className="me-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="me-2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="login" type="submit">
            Login
          </Button>
          <Button variant="login" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};
export default FormComponent;
