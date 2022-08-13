import * as React from 'react'
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Button, DatePicker} from 'antd';
import "antd/dist/antd.css";

const Test = () => {
    return (
        <div id="hello-world-test">
           
            <Button type="primary">PRESS ME</Button>
            <DatePicker placeholder="select date"/>

        </div>
    );
};
export default Test
