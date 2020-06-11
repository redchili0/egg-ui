import React, { useState } from 'react';
import { View, Image } from "remax/one";
import { EggIcon } from '@redchili/egg-ui';
import './index.css'
// import { EvaFillSvgType, EvaOutLineSvgType } from '@redchili/egg-ui/src/components/icon/types';

export default function Icon() {
    const [animation, setAnimation] = useState({
        type: 'zoom' as 'zoom' | 'shake',
        infinite: false
    })

    const [count, setCount] = React.useState(0);

    return (
        <View>
            <View>{count}</View>
            <View onTap={() => setCount(count + 1)}>+1</View>
            <View className="icon-demo">
                <View className="tit">Icon 大小 - width</View>
                <View className="icons">
                    <EggIcon width={32} icon="settings-2" />
                    <EggIcon width={48} icon="phone-missed-outline" />
                    <EggIcon width={64} icon="volume-off" />
                </View>
            </View>
            <View className="icon-demo">
                <View className="tit">Icon 颜色 - color</View>
                <View className="icons">
                    <EggIcon color="#00C48C" width={32} icon="settings-2" />
                    <EggIcon color="red" width={48} icon="phone-missed-outline" />
                    <EggIcon color="#FFA26B" width={64} icon="volume-off" />
                </View>
            </View>
            <View className="icon-demo">
                <View className="tit" onTap={() => {
                    setAnimation({
                        type: 'shake',
                        infinite: false
                    })
                }}>Icon 动画 - css animation</View>
                <View className="icons">
                    <EggIcon animation={animation} width={72} color="#3F3356" icon="external-link" />
                    <EggIcon animation="zoom" width={72} color="#3F3356" icon="mic-outline" />
                    <EggIcon animation={{ type: 'pulse', infinite: false }} width={72} color="#FFA26B" icon="alert-triangle-outline" />
                    <EggIcon
                        animation={{ type: "shake", infinite: true }}
                        width={72} color="#FFA26B"
                        icon="alert-triangle-outline"
                    />
                    <EggIcon
                        animation={{ type: "pulse", infinite: false }}
                        width={72}
                        color="#FFA26B"
                        icon="alert-triangle-outline"
                        customizeStyle={{
                            animationIterationCount: 3
                        }}
                    />
                </View>
            </View>
        </View>
    )
}