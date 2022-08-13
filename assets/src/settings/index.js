import React from "react";
import {render} from 'react-dom';
import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";

const ContentArea = () => {
    return (
        <div className="wordpress-react-setting-content-area">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
};

window.addEventListener("load", function () {

    render(
        <ContentArea/>,
        document.getElementById("wordpress-react-ant-design")
    );


});