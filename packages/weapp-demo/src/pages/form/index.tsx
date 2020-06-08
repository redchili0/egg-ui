import React, { useRef, useState } from 'react';
import { EggForm, EggFieldItem, EggSubmit, EggInput } from '@redchili/egg-ui';

import { Label } from 'remax/one';
import { css } from 'linaria';

export default function FormDemo() {
    const [errors, registerError] = useState({});



    return (
        <EggForm registerError={registerError} onSubmit={(data) => { console.log('这里执行了', data) }}>
            <EggFieldItem className={css`
                display: flex;
                justify-content: flex-start;
                align-items: center;
            `} name="nickname" rule={[{ required: true, message: "请输入值" }]}>
                <Label htmlFor="nickname" className={
                    css`
                        font-size: 32px;
                        margin-right: 10px;
                    `
                } >测试:</Label>
                <EggInput name="nickname" />
            </EggFieldItem>
            <EggSubmit className={css`
                margin-top: 20px;
            `}>提交</EggSubmit>
        </EggForm>
    )
}