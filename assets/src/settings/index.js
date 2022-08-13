import React from "react";
import {render} from 'react-dom';
import Test from "./elements/test";
import ReactDOM from 'react-dom';

const SimplePanel = () => {
    return (
        <Test/>
    )
};

window.addEventListener("load", function () {

    render(
        <SimplePanel/>,
        document.getElementById("wordpress-react-ant-design")
    );


});