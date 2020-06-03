import React, { useContext } from 'react';
import { Button } from 'remax/one';
import { FormContext } from '../context';


export default function EggSubmit(props: React.PropsWithChildren<{}>) {
    const { children } = props;
    const { onSubmit } = useContext(FormContext);

    // DONE: remax/one 文档有误，此版本不存在 htmlFor , 故自己绑定 onSubmit 方法来触发 form 父组件的 submit
    return <Button onTap={onSubmit}>{children}</Button>
}