import React from "react";
import {render} from 'react-dom';

const SimplePanel = () => {
    return (<h1>Hello React Guys</h1>)
};
window.addEventListener("load", function () {
    render(
        <h1>WOW Its Working</h1>,
        document.getElementById("wordpress-react-ant-design")
    );
});