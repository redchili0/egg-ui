import React from 'react';
import { Button } from 'remax/one';
import './index.css';

interface Props {
    children: React.ReactNode | string
}

export default function EggButton(props: Props) {

    const { children } = props;

    return <Button className="egg-button">{children}</Button>

}