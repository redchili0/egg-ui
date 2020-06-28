import React from 'react';
import { EggLoading } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'

export default function Tag() {

    return (
        <View style={{ backgroundColor: '#1890ff' }}>
            <EggLoading type="box" loadingText='ddd'>
                <View style={{ width: '200px', height: '200px'}}>内容内容</View>
            </EggLoading>
            {/* <EggLoading type="circle" /> */}
        </View>
    )
}