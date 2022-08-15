import * as React from 'react';
import {Form, Input} from 'antd';

type textProps = {
    options: any,
};
const Text = (props: textProps) => {
    return (
        <Form.Item label={props.options.title}>
            <Input placeholder={props.options.placeholder}/>
        </Form.Item>
    );
};
export default Text;