import * as React from 'react';
import {Form, Input} from 'antd';

type textProps = {
    placeholder?: string,
    label?: string
};
const Text = (props: textProps) => {
    return (
        <Form.Item label={props.label}>
            <Input placeholder={props.placeholder}/>
        </Form.Item>
    );
};
export default Text;