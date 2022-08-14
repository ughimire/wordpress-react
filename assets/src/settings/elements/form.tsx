import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Col, Row, Card} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';

import {Button, Form, Input, Radio} from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormFields = () => {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
    const onFormLayoutChange = ({layout}: { layout: LayoutType }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {span: 4},
                wrapperCol: {span: 14},
            }
            : null;

    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {span: 14, offset: 4},
            }
            : null;


    return (
        <div className="wordpress-react-settings-content-form">
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{layout: formLayout}}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="Form Layout" name="layout">
                    <Radio.Group value={formLayout}>
                        <Radio.Button value="horizontal">Horizontal</Radio.Button>
                        <Radio.Button value="vertical">Vertical</Radio.Button>
                        <Radio.Button value="inline">Inline</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Field A">
                    <Input placeholder="input placeholder"/>
                </Form.Item>
                <Form.Item label="Field B">
                    <Input placeholder="input placeholder"/>
                </Form.Item>

            </Form>
        </div>
    );
};

export default FormFields;