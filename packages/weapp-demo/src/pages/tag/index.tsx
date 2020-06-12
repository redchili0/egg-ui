import React from 'react';
import { EggTag } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'

export default function Tag() {

    const handleCick = (e) => {
        console.log(e);
    }

    return (
        <View>
            <View className="avatar-demo">
                <View className="tit">tag demo</View>
                <View className="tags">
                    <EggTag name="tag1" onClick={handleCick} size="small">tag1</EggTag>
                    <EggTag name="tag1"  onClick={handleCick} size="small" circle>tag1</EggTag>
                    {/* <EggTag>tag1</EggTag> */}
                    <EggTag name="tag2"  onClick={handleCick} active>tag2</EggTag>
                    <EggTag name="tag3"  onClick={handleCick} circle>tag3</EggTag>
                    <EggTag name="tag4"  onClick={handleCick} disable>tag4</EggTag>
                </View>
            </View>
        </View>
    )
}