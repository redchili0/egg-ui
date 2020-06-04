import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Form as ReForm } from 'remax/one';
import { FormContext } from './context';
import { Rule, RequireRule, PatternRule } from './field_item';
import { singleObjToArray } from '../../util/single_obj_to_array';

type Data = Record<string, string | number>;

interface Props {
    onSubmit: (data?: Data) => void
    registerError?: React.Dispatch<React.SetStateAction<{}>>;
    initialValues?: Data // NOTE: 组件动态初始值
}

type Rules = Record<string, Rule[]>

const EggForm: React.ForwardRefRenderFunction<{}, React.PropsWithChildren<Props>> = (props, ref) => {
    const { onSubmit, children } = props;
    const [data, setFormData] = useState<Data>();
    const [rules, setRules] = useState<Rules>();

    const setErrors = (error: Record<string, any>) => {
        const { registerError } = props;
        const [name, value] = singleObjToArray(error);

        if (registerError) {
            value ? registerError((errors) => {
                return { ...errors, ...error }
            }) : registerError((errors) => {
                const errorsTmp = { ...errors };
                if (Object.prototype.hasOwnProperty.call(errorsTmp, name)) {
                    delete (errorsTmp as Record<string, any>)[name];
                }

                return errorsTmp;
            })
        }
    }
    // TODO: 收集所有的 formItem 的 rule 的规则集
    const collectFieldItem = (rule: Rules, name: string) => {
        setRules({ ...rules, ...rule })
        setFormData({ ...data, ...{ [name]: "" } })
    }

    // DONE: 将 ref 实例传递给父组件，useImperativeHandle 和 forwardRef 一起使用
    useImperativeHandle(ref, () => ({
        action: {}
    }));
    const checkFieldItem = (itemData: any) => {
        let tag = true;
        
        const [name, value] = singleObjToArray(itemData);
        if (Object.prototype.hasOwnProperty.call(rules, name) && rules) {
            const rule = rules[name]
            rule.forEach((item) => {
                const keys = Object.keys(item); // 
                const ruleType = keys[0];
                if (ruleType === 'required' && (item as RequireRule)[ruleType]) {

                    if (!value) {
                        setErrors({ [name]: item.message })
                        tag = false;
                    } else {
                        setErrors({ [name]: false })
                    }
                } else if (ruleType === 'pattern' && (item as PatternRule)[ruleType]) {
                    const ruleMethod = (item as PatternRule)[ruleType];
                    if (typeof ruleMethod === 'function') {
                        if (!ruleMethod(value)) {
                            setErrors({ [name]: item.message })
                            tag = false;
                        } else {
                            setErrors({ [name]: false })
                        }
                    } else {
                        // NOTE: 如何校验结果为 非，则执行第二个条件，设置错误信息
                        if (!(ruleMethod as RegExp).test(value)) {
                            setErrors({ [name]: item.message });
                            tag = false;
                        } else {
                            setErrors({ [name]: false })
                        }
                    }
                } else {
                    console.warn(`${ruleType}是无效的校验规则`);
                }
            })
        }
        return tag;
    }
    const handleSubmit = () => {
        // TODO: 判断是否有不合法的数据
        let tag = true;
        if (data) {
            Object.keys(data).forEach((key) => {
                tag = checkFieldItem({ [key]: data[key] });
            })
            if (tag) {
                onSubmit(data);
            }
        }
    }

    const handleSetFormData = (itemData: any) => {
        // TODO: 设置的同时需要校验数据是否正确
        console.log("这里应该每次输入都会触发才对啊", itemData);
        checkFieldItem(itemData);
        setFormData({ ...data, ...itemData })
    }
    return (
        <FormContext.Provider value={{ setFormData: handleSetFormData, onSubmit: handleSubmit, collectFieldItem }}>
            <ReForm>
                {children}
            </ReForm>
        </FormContext.Provider>
    )
}

export default forwardRef(EggForm);