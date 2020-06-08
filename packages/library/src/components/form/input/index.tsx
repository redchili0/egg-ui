import React from 'react';
import { Input } from 'remax/one';
import './index.css';
interface Props {
    name: string;
    className?: string;
    style?: Record<string, string>;
    [key: string]: any
}

export default function EggInput(props: Props) {

    const {name, className, style} = props;

    return <Input name={name} className={`egg-input ${className}`} style={style} onInput={props.onInput} onBlur={props.onBlur} onFocus={props.onFocus} value={props.value} />
}