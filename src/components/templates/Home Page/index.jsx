import React from "react";
import "./style.css";
import Navbar from "../../organisms/Navbar";
import Body from "../../organisms/Body";
import Footer from "../../organisms/Footer";

const HomeDefault = ({carouselData}) => {
  return (
    <>
      <div className="container1">
        <Navbar/>
        <Body className={"body"} carouselData={carouselData}/>
        <Footer className={"footer-basic"}/>
      </div>
    </>
  );
};

export default HomeDefault;
