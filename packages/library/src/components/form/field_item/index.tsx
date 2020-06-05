import React, { useState, useContext, useEffect } from 'react';
import { View } from 'remax/one';
import { FormContext } from '../context';

export interface RequireRule {
    required: boolean;
    message: string;
}

export interface PatternRule {
    pattern: RegExp | ((value: any) => boolean);
    message: string;
}

export type Rule = RequireRule | PatternRule

interface Props {
    name: string;
    checkMode?: 'blur' | 'input' // 校验的模式，默认 input
    rule?: Rule[];
}

export default function EggFieldItem(props: React.PropsWithChildren<Props>) {
    const { children, checkMode } = props;
    const { collectFieldItem, formData, handleInput, handleBlur } = useContext(FormContext);

    useEffect(() => {
        const { rule, name } = props;
        if (rule) {
            collectFieldItem({ [name]: rule }, name, checkMode)
        }
    }, [])

    const handleFn = (type: 'blur' | 'input', name: string, value: InputEvent | any) => {
        let itemValue: Record<string, any>;
        if (typeof value === 'object' && value.target) {
            itemValue = { [name]: value.target.value };
        } else {
            itemValue = { [name]: value };
        }
        switch (type) {
            case 'blur':
                handleBlur(itemValue);
                break;
            case 'input':
                handleInput(itemValue);
            default:
                break;
        }
    }

    return <View>
        {
            React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) {
                    return null
                }
                // DONE: 判断 ReactNode 是否是 function(input 是这个类型， label 不是这个类型，还需要看其他自定义组件时类型是什么)
                if (typeof child.type === 'function') {
                    const childProps = {
                        ...child.props,
                        ...{
                            value: formData && formData[child.props.name],
                            onBlur: (itemValue: any) => {
                                handleFn('blur', child.props.name, itemValue)
                            },
                            onInput: (itemValue: any) => {
                                handleFn('input', child.props.name, itemValue)
                            }
                        }
                    }
                    return React.cloneElement(child, childProps)
                } else {
                    return child
                }
            })
        }
    </View>
}