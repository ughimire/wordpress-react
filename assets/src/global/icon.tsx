import * as React from 'react';

type IconProps = {
    icon: string
};
const Icon = (iconProps: IconProps) => {
    if (iconProps.icon == undefined) {
        return (<></>);
    }
    let icon_class = "icon " + iconProps.icon;
    return (
        <span className={icon_class}></span>
    );
};
export default Icon;