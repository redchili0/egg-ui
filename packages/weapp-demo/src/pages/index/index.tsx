import * as React from 'react';
import { EggButton } from 'egg-ui';
import { View } from 'remax/one';

export default () => {
  return (
    <View >
      <EggButton >DEFAULT</EggButton>
      <EggButton size="medium">DEFAULT</EggButton>
      <EggButton size="small">DEFAULT</EggButton>
      <EggButton size="medium" type="light">DEFAULT</EggButton>
      <EggButton size="medium" type="reverse">DEFAULT</EggButton>
      <EggButton size="small" disable>DEFAULT</EggButton>
      <EggButton size="small" type="reverse" disable>DEFAULT</EggButton>
    </View>
  );
};
