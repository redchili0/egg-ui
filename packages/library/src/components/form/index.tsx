import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Form as ReForm } from 'remax/one';
import { FormContext } from './context';

type Data = Record<string, string | number>;

interface Props {
    onSubmit: (data?: Data) => void
    initialValues?: Data // NOTE: 组件动态初始值
}

const EggForm: React.ForwardRefRenderFunction<{}, React.PropsWithChildren<Props>> = (props, ref) => {
    const { onSubmit, children } = props;
    const [data, setFormData] = useState<Data>();

    // TODO: 收集所有的 formItem 的 rule 的规则集

    // DONE: 将 ref 实例传递给父组件，useImperativeHandle 和 forwardRef 一起使用
    useImperativeHandle(ref, () => ({
        errors: {}
    }));
    const handleSubmit = () => {
        // TODO: 判断是否有不合法的数据
        onSubmit(data);
    }
    const handleSetFormData = (itemData: any) => {
        // TODO: 设置的同时需要校验数据是否正确
        setFormData({ ...data, ...itemData })
    }
    return (
        <FormContext.Provider value={{ setFormData: handleSetFormData, onSubmit: handleSubmit }}>
            <ReForm>
                {children}
            </ReForm>
        </FormContext.Provider>
    )
}

export default forwardRef(EggForm);