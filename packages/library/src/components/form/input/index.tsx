import React from 'react';
import { Input } from 'remax/one';
import './index.css';
interface Props {
    name: string;
    [key: string]: any
}

export default function EggInput(props: Props) {
    return <Input className="egg-input" onInput={props.onInput} onBlur={props.onBlur} onFocus={props.onFocus} value={props.value} />
}