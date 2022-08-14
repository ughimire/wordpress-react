import * as React from 'react';
import {useState} from 'react';
import {Col, Row, Button} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';

import 'antd/dist/antd.css';
import "./index.scss"

const Header = () => {
    const [size, setSize] = useState<SizeType>('large');
    return (
        <div className="wordpress-react-settings-footer">
            <Row>
                <Col flex={5}>
                    <div className={"footer-left"}>
                        <p>&copy; WordPress React</p>
                    </div>
                </Col>
                <Col flex={20}>
                    <div className={"footer-center"}></div>
                </Col>
                <Col flex={5}>
                    <div className={"footer-right"}>
                        <Button type="primary" icon={<SaveOutlined/>} size={size}>
                            Save Changes
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default Header;