import React, { useState, useContext } from 'react';
import { View } from 'remax/one';
import { FormContext } from '../context';

interface RequireRule {
    required: boolean;
    message: string;
}

interface PatternRule {
    pattern: RegExp | ((value: any) => boolean);
    message: string;
}

type Rule = RequireRule | PatternRule

interface Props {
    rule?: Rule[]
}

export default function EggFieldItem(props: React.PropsWithChildren<Props>) {
    const { children } = props;
    const { setFormData } = useContext(FormContext);
    const [value, setValue] = useState<any>();
    const handleInput = (itemKey: string, itemValue: any) => {
        // DONE: 判断 itemValue 是否是 event , 还是简单值 
        if (typeof itemValue === 'object' && itemValue.target) {
            setFormData({ [itemKey]: itemValue.target.value });
        } else {
            setFormData({ [itemKey]: itemValue });
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
                            value,
                            onInput: (itemValue: any) => handleInput(child.props.name, itemValue)
                        }
                    }
                    return React.cloneElement(child, childProps)
                }
                return child
            })
        }
    </View>
}