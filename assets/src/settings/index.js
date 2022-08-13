import React from "react";
import {render} from 'react-dom';
import Test from "./elements/test";
import ReactDOM from 'react-dom';

const ContentArea = () => {
    return (
        <div className="wordpress-react-setting-content-area">

        </div>
    )
};

window.addEventListener("load", function () {

    render(
        <ContentArea/>,
        document.getElementById("wordpress-react-ant-design")
    );


});