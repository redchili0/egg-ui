import React from 'react';
import { EggButton } from '@redchili/egg-ui/src';
import { View } from 'remax/one';
// import { css } from '../../util/styled';
import {css} from 'linaria';

export default () => {
  return (
    <View className={css`
      height: 1000rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}>
      <EggButton >提交</EggButton>
      <EggButton shape="round">提交</EggButton>
      <EggButton size="medium">提交</EggButton>
      <EggButton size="medium" shape="round">提交</EggButton>
      <EggButton size="small">提交</EggButton>
      <EggButton size="medium" type="light">提交</EggButton>
      <EggButton size="medium" type="reverse">提交</EggButton>
      <EggButton size="small" disable>提交</EggButton>
      <EggButton size="small" type="reverse" disable>提交</EggButton>
    </View>
  );
};
