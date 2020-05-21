import React from 'react';
import { Button } from 'remax/one';
import classNames from 'classnames';
import './index.css';
export default function EggButton(props) {
    const { children, size = 'large', className = '', onClick, disable = false, type = 'default' } = props;
    const classNameProp = classNames('egg-button', className, size, type, { 'disable': disable });
    return <Button className={classNameProp} onTap={onClick}>{children}</Button>;
}
