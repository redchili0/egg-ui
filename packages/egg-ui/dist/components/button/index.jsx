import React from 'react';
import { View, Button } from 'remax/one';
import './index.css';
export default function EggButton(props) {
    const { children } = props;
    return <View>
        <Button className="egg-button">{children}</Button>
    </View>;
}
