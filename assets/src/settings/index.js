import React, {useEffect, useState, useRef} from "react";
import {render} from 'react-dom';

const YatraCouponTabPanel = () => {
    return (<h1>Hello React Guys</h1>)
};

window.addEventListener("load", function () {
    render(
        <YatraCouponTabPanel/>,
        document.getElementById("yatra-coupon-meta-element")
    );


});