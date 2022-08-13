import * as React from 'react';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';
import "./index.scss"

const Header = () => {
    return (
        <div className="wordpress-react-settings-header">
            <Row>
                <Col flex={5}>
                    <div className={"header-title"}></div>
                </Col>
                <Col flex={15}>3 / 5</Col>
            </Row>
        </div>
    );
};
export default Header;