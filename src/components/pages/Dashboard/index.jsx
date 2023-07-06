import React from "react";
import "./style.css";
import HomeDefault from "../../templates/Home Page";

const Dashboard = ({carouselData}) => {
    return(
        <>
        <HomeDefault carouselData={carouselData}/>
        </>
    )
}

export default Dashboard;