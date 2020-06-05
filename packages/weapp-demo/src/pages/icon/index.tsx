import React from 'react';
import { View, Image } from "remax/one";
import { EggIcon } from '@redchili/egg-ui/src';
// import { EvaFillSvgType, EvaOutLineSvgType } from '@redchili/egg-ui/src/components/icon/types';

export default function Icon() {
    return(
        <View>
            <EggIcon width={72} color="red" icon="arrow-back" />
        </View>
    )
}