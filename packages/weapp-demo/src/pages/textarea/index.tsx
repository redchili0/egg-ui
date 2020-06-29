import React from 'react';
import { EggTextarea } from '@redchili/egg-ui';
import { View } from 'remax/wechat';
import './index.css'


export default function TextareaDemo() {
    return (
        <View>
            <EggTextarea onInput={e => console.log(e)} />
        </View>
    )
}