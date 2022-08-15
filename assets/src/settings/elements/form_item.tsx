import * as React from 'react';
import {useState} from 'react';


import {Button, Form, Input, Radio} from 'antd';
import Text from "../fields/text";
import CheckBox from "../fields/checkbox";
import CheckBoxField from "../fields/checkbox";

type formItemProps = {
    item: any
}
const FormItem = (props: formItemProps) => {

    let type = props.item.type ? props.item.type : "text";

    switch (type) {
        case "text":
            return (<Text options={props.item}/>);
            break;
        case "checkbox":
            return (<CheckBoxField options={props.item}/>);
            break;
        default:
            return (<Text options={props.item}/>);
            break;
    }
};

export default FormItem;