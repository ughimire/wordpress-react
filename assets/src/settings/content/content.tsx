import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Col, Row, Card} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';
import Sidebar from "./sidebar/sidebar";
import FormFields from "../elements/form";

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
                        <Card title="Setting Title Goes Here" style={{width: "100%"}}>
                            <FormFields/>
                        </Card>
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