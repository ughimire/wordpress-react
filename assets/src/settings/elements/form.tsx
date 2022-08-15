import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Col, Space, Card} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';

import {Button, Form, Input, Radio} from 'antd';
import FormItem from "./form_item";

type LayoutType = Parameters<typeof Form>[0]['layout'];
type formProps = {
    section: any
}
const FormFields = (props: formProps) => {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
    const [componentSize, setComponentSize] = useState<SizeType | 'large'>('large');
    const [settings, setSettings] = useState(props.section.settings);

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
            <Card title={props.section.title} style={{width: "100%"}}>
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{layout: formLayout}}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize as SizeType}
                >
                    {Object.keys(settings).map((setting_id: any, index: number) => (
                        <FormItem item={settings[setting_id]}/>
                    ))}
                   
                </Form>
            </Card>

        </div>
    );
};

export default FormFields;