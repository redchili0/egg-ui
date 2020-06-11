import React from 'react';
import { EggAvatar } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'

export default function Avatar() {
    return (
        <View>
            <View className="avatar-demo">
                <View className="tit">头像大小</View>
                <View className="avatars">
                    <EggAvatar
                        size="small"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUQF9IWpLwtc-XfdIJvVYsbT3NMW6yNN1Xvpl4D4JQGw_L3zW_&usqp=CAU"
                    />
                    <EggAvatar
                        size="normal"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUQF9IWpLwtc-XfdIJvVYsbT3NMW6yNN1Xvpl4D4JQGw_L3zW_&usqp=CAU"
                    />
                    <EggAvatar
                        size="large"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUQF9IWpLwtc-XfdIJvVYsbT3NMW6yNN1Xvpl4D4JQGw_L3zW_&usqp=CAU"
                    />
                </View>
            </View>
            <View className="avatar-demo">
                <View className="tit">头像形状</View>
                <View className="avatars">
                    <EggAvatar
                        type="radio"
                        size="small"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLRfPUGQxZYYhoH0uU4ZN-4NL1ntq9cuKN2aYPA5LselU31O9g&usqp=CAU"
                    />
                    <EggAvatar
                        type="radio"
                        size="normal"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLRfPUGQxZYYhoH0uU4ZN-4NL1ntq9cuKN2aYPA5LselU31O9g&usqp=CAU"
                    />
                    <EggAvatar
                        type="radio"
                        size="large"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLRfPUGQxZYYhoH0uU4ZN-4NL1ntq9cuKN2aYPA5LselU31O9g&usqp=CAU"
                    />
                </View>
            </View>
        </View>
    )
}