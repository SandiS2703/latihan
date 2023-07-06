import React from "react";
import "./style.css";
import EventCarousel from "../../molecules/Carousel";
import News from "../../molecules/News";

const Body = ({ className, carouselData }) => {
  return (
    <>
      <div className={className}>
        <EventCarousel
          className={"basic-carousel"}
          carouselData={carouselData}
        />
        <News
          className={"basic-news"}
          link={"Ini Berita 1"}
          paragraph={"Sebuah Berita 1"}
          href={"#"}
        />
        <News
          className={"basic-news"}
          link={"Ini Berita 2"}
          paragraph={"Sebuah Berita 2"}
          href={"#"}
        />
        <News
          className={"basic-news"}
          link={"Ini Berita 3"}
          paragraph={"Sebuah Berita 3"}
          href={"#"}
        />
        <News
          className={"basic-news"}
          link={"Ini Berita 4"}
          paragraph={"Sebuah Berita 4"}
          href={"#"}
        />
        <News
          className={"basic-news"}
          link={"Ini Berita 5"}
          paragraph={"Sebuah Berita 5"}
          href={"#"}
        />
      </div>
    </>
  );
};
export default Body;
