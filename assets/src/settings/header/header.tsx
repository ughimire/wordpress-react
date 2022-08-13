import * as React from 'react';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';

const Header = () => {
    return (
        <div className="wordpress-react-settings-header">
            <Row gutter={[0, 0]}>
                <Col span={4}><h1>Hello Col1 </h1></Col>
                <Col span={8}><h1>Hello Col 2</h1></Col>
            </Row>
        </div>
    );
};

export default Header;