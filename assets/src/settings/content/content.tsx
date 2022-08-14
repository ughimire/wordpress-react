import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Col, Row, Button} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';
import Sidebar from "./sidebar/sidebar";

const Content = () => {
    const [size, setSize] = useState<SizeType>('large');

    return (
        <div className="wordpress-react-settings-content">

            <Row wrap={false}>
                <Col flex="300px">
                    <div className={"sidebar-left"}>
                        <Sidebar/>
                    </div>
                </Col>
                <Col flex="auto">
                    <div className={"content-center"}>


                    </div>
                </Col>
                <Col flex="350px">
                    <div className={"sidebar-right"}>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Content;