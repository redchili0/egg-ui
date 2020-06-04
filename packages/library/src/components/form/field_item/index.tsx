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
    rule?: Rule[];
}

export default function EggFieldItem(props: React.PropsWithChildren<Props>) {
    const { children } = props;
    const { setFormData, collectFieldItem } = useContext(FormContext);

    useEffect(() => {
        const { rule, name } = props;

        if (rule) {
            collectFieldItem({ [name]: rule }, name)
        }
    }, [])

    const handleInput = (name: string, itemValue: any) => {
        // DONE: 判断 itemValue 是否是 event , 还是简单值 
        console.log('这里没有触发吗', name);
        if (typeof itemValue === 'object' && itemValue.target) {
            setFormData({ [name]: itemValue.target.value });
        } else {
            setFormData({ [name]: itemValue });
        }
    }

    return <View>
        {
            React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) {
                    return null
                }
                // TODO: 判断 ReactNode 是否是 function(input 是这个类型， label 不是这个类型，还需要看其他自定义组件时类型是什么)
                if (typeof child.type === 'function') {
                    const childProps = {
                        ...child.props,
                        ...{
                            value: "",
                            name: "测试",
                            onFocus: () => {
                                console.log('校验错误')
                            },
                            onInput: (itemValue: any) => handleInput(child.props.name, itemValue)
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