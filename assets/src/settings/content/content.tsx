import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Col, Row, Button} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';

const Content = () => {
    const [size, setSize] = useState<SizeType>('large');

    return (
        <div className="wordpress-react-settings-content">
            <Row>
                <Col flex={5}>
                    <div className={"sidebar-left"}>
                        <h2>Settings Page</h2>
                    </div>
                </Col>
                <Col flex={20}>
                    <div className={"header-center"}></div>
                </Col>
                <Col flex={5}>
                    <div className={"header-right"}>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Content;