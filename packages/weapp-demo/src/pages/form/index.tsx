import React, { useRef, useEffect } from 'react';
import { EggForm, EggFieldItem, EggSubmit } from '@redchili/egg-ui';
import { Input, Label } from 'remax/one';

export default function FormDemo() {
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            console.log(formRef.current)
        }
    }, [])

    return (
        <EggForm ref={formRef} onSubmit={(data) => { console.log(data) }}>
            <EggFieldItem name="nickname" rule={[{ required: true, message: "请输入值" }]}>
                <Label htmlFor="nickname" >测试</Label>
                <Input name="nickname" />
            </EggFieldItem>
            <EggSubmit >提交</EggSubmit>
        </EggForm>
    )
}

function EggInput () {
    return <Input />
}