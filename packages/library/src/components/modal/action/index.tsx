import React from 'react'
import { View } from 'remax/one'
import classNames from 'classnames'


interface Props {
    className?: string
}

export default function EggModalAction (props: React.PropsWithChildren<Props>) {

    const propsClassName = classNames('egg-modal__footer', props.className)

    return (
        <View className={propsClassName}>
            <View className="egg-modal__action">{props.children}</View>
        </View>
    )
}