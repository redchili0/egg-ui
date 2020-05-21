import React from 'react';
import './index.css';
export declare type ButtonSize = 'large' | "medium" | "small";
interface Props {
    children: React.ReactNode | string;
    size?: ButtonSize;
    className?: string;
    disable?: boolean;
    type?: 'light' | 'default' | "reverse";
    onClick?: () => void;
}
export default function EggButton(props: Props): JSX.Element;
export {};
