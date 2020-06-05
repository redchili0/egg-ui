import React, { useRef, useState } from 'react';
import { EggForm, EggFieldItem, EggSubmit, EggInput } from '@redchili/egg-ui';

import { Label } from 'remax/one';

export default function FormDemo() {
    const formRef = useRef(null); // form action 
    const [errors, registerError] = useState({});

    console.log('查看下错误啊', errors);
    return (
        <EggForm registerError={registerError} ref={formRef} onSubmit={(data) => { console.log('这里执行了', data) }}>
            <EggFieldItem name="nickname" rule={[{ required: true, message: "请输入值" }]}>
                <Label htmlFor="nickname" >测试</Label>
                <EggInput name="nickname" />
            </EggFieldItem>
            <EggSubmit >提交</EggSubmit>
        </EggForm>
    )
}