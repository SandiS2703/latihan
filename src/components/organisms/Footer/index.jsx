import React from "react";
import "./style.css";

const Footer = ({ className }) => {
  return (
    <>
      <footer>
        <div className={className}>
          <ul className="footer-item">
            <li>Contact 1</li>
            <li>Contact 2</li>
            <li>Contact 3</li>
            <li>Contact 4</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
