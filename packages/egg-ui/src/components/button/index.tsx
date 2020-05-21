import React from 'react';
import { Button } from 'remax/one';
import classNames from 'classnames';

import './index.css';

export type ButtonSize = 'large' | "medium" | "small";

interface Props {
    children: React.ReactNode | string
    size?: ButtonSize,
    className?: string,
    disable?: boolean,
    type?: 'light' | 'default' | "reverse"
    onClick?: () => void
}

export default function EggButton(props: Props) {

    const { children, size = 'large', className = '', onClick, disable = false, type = 'default' } = props;

    const classNameProp = classNames('egg-button', className, size, type, { 'disable': disable })

    return <Button className={classNameProp} onTap={onClick}>{children}</Button>

}