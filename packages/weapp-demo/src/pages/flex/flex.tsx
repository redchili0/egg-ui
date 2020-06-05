import React from 'react';
import { Flex } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'

export default function FlexDemo () {
    return (
        <View>
            <View>
                <View className="title">center</View>
                <Flex className="center-demo" justify="center">
                    <View className="box red" />
                    <View className="box green" />
                    <View className="box pink" />
                </Flex>
            </View>
            <View>
                <View className="title">start</View>
                <Flex className="start-demo" justify="start">
                    <View className="box red" />
                    <View className="box green" />
                    <View className="box pink" />
                </Flex>
            </View>
            <View>
                <View className="title">between</View>
                <Flex className="between-demo" justify="between">
                    <View className="box red" />
                    <View className="box green" />
                    <View className="box pink" />
                </Flex>
            </View>
            <View>
                <View className="title">column-reverse</View>
                <Flex className="column-reverse-dmow" direction="column-reverse">
                    <View className="box red" />
                    <View className="box green" />
                    <View className="box pink" />
                    <View className="box blue" />
                    <View className="box orange" />
                </Flex>
            </View>
            <View>
                <View className="title">wrap</View>
                <Flex className="wrap-demo" wrap="wrap" >
                    <View className="box red" />
                    <View className="box green" />
                    <View className="box pink" />
                    <View className="box blue" />
                    <View className="box orange" />
                </Flex>
            </View>
            <View>
                <View className="title">nowrap</View>
                <Flex className="nowrap-dmow" wrap="nowrap">
                    <View className="box red" />
                    <View className="box green" />
                    <View className="box pink" />
                    <View className="box blue" />
                    <View className="box orange" />
                </Flex>
            </View>
        </View>
    )
}