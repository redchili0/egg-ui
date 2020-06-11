import React from 'react'
import { View } from 'remax/one'
import classNames from 'classnames'


interface Props {
    className?: string
}

export default function EggModalContent (props: React.PropsWithChildren<Props>) {

    const propsClassName = classNames('egg-modal__content', props.className)

    return (
        <View className={propsClassName}>{props.children}</View>
    )
}