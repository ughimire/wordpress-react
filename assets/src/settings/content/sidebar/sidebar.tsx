/** @var WordPress_React_Obj */
import * as React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import "../../../global/globals"
import {Col, Row, Button} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import type {SizeType} from 'antd/es/config-provider/SizeContext';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import {Divider, Menu, Switch} from 'antd';
import type {MenuProps, MenuTheme} from 'antd/es/menu';
import Icon from "../../../global/icon";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

function get_menu_items(settings: any) {
    let items = new Array();
    Object.keys(settings).forEach(function (key) {
        let nav_item = get_menu_item(settings[key]);
        items.push(nav_item)
    });
    return items;
}

function get_menu_item(item: any) {
    return {
        key: item.id,
        icon: <Icon icon={item.icon}/>,
        children: typeof item.children != "undefined" ? get_menu_items(item.children) : undefined,
        label: item.title

    }


}

const items: MenuItem[] = [
    getItem('Navigation One', '1', <MailOutlined/>),
    getItem('Navigation Two', '2', <CalendarOutlined/>),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined/>, [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined/>, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
        </a>,
        'link',
        <LinkOutlined/>,
    ),
];
const items1: MenuItem[] = get_menu_items(WordPress_React_Obj.settings);
console.log(items);
console.log(get_menu_items(WordPress_React_Obj.settings));
const Sidebar = () => {
    const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
    const [theme, setTheme] = useState<MenuTheme>('light');
    const changeMode = (value: boolean) => {
        setMode(value ? 'vertical' : 'inline');
    };

    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <div className="wordpress-react-settings-sidebar">

            <Menu
                style={{width: "100%"}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={items1}
            />

        </div>
    );
};

export default Sidebar;