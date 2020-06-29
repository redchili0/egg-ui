import React, { useState } from 'react';
import { EggRadio, EggRadioGroup } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'


export default function EggRadioaDemo() {

    const [checked, setChecked] = useState(false)

    return (
        <View>
            <EggRadioGroup onChange={(e) => console.log(e)}>
                <EggRadio value="demo" checked={true} name="demo" color="red">
                    <View>选项1</View>
                </EggRadio>
                <EggRadio value="demo2" checked={checked} name="demo1" color="green">
                    <View>选项2</View>
                </EggRadio>
                <EggRadio disabled checked={checked} name="demo1" color="green">
                    <View>选项3 - 禁用</View>
                </EggRadio>
            </EggRadioGroup>
        </View>
    )
}