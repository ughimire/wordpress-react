import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Col, Row, Space} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';
import Sidebar from "./sidebar/sidebar";
import FormFields from "../elements/form";
import "../../global/globals";
import ObjectDeep from "../../global/arrayhelpers";

const Content = () => {
    const [selectedSections, setSelectedSections] = useState([]);

    const menuItemClicked = (event: any) => {
        let id = event.key;
        let idArray = event.keyPath;
        idArray = idArray.reverse();
        let settings = WordPress_React_Obj.settings;
        /*   idArray.forEach(function (item: string, index: number) {
               console.log(item, index);
           });*/
        let selectedSec = ObjectDeep(settings, {key: "id", value: id});

        if (typeof selectedSec.sections !== "undefined") {
            setSelectedSections(selectedSec.sections);
        }
    }

    return (
        <div className="wordpress-react-settings-content">

            <Row wrap={false}>
                <Col flex="300px">
                    <div className={"sidebar-left"}>
                        <Sidebar menuItemClicked={(event) => {
                            menuItemClicked(event)
                        }}/>
                    </div>
                </Col>
                <Col flex="auto">
                    <Space direction="vertical" size="middle" style={{display: 'flex', padding: "15px"}}>
                        {Object.keys(selectedSections).map((section_id: any, index: number) => (
                            <FormFields section={selectedSections[section_id]}/>
                        ))}
                    </Space>

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