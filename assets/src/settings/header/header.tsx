import * as React from 'react';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';

const Header = () => {
    return (
        <div className="wordpress-react-settings-header">
            <Row>
                <Col flex={5}>2 / 5</Col>
                <Col flex={15}>3 / 5</Col>
            </Row>
        </div>
    );
};

export default Header;