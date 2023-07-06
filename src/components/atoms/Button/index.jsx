import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ variant, onclick, size, href, type, children }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn{
      font-size: 16px ;
      text-align: center ;
      border-radius: 8px ;
      margin-right: 8px ;
      height: 38px;
      padding: auto;
    }
  
    .btn-login {
      color: #D8C4B6 ;
      background-color: #4f709c;
      border: 2px solid #4f709c ;
      display: inline-block ;
    }
    
    .btn-login:hover {
      color: #4f709c ;
      background-color: #D8C4B6 ;
      border: 2px solid #4f709c ;
      display: inline-block ;
    }
    
    `}
      </style>
      <Button
        variant={variant}
        onClick={onclick}
        size={size}
        href={href}
        type={type}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonComponent;
