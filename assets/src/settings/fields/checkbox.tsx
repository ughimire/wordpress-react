import * as React from 'react';
import {Form, Checkbox} from 'antd';

type textProps = {
    options: any,
};
const CheckBoxField = (props: textProps) => {
    let options = props.options.options ? props.options.options : new Array();
    console.log(options);
    return (
        <Form.Item label={props.options.title}>

            {Object.keys(options).map((option_id: any, index: number) => (
                <Checkbox>{options[option_id]}</Checkbox>
            ))}
            
        </Form.Item>
    );
};
export default CheckBoxField;