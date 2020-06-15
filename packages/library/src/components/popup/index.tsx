import React, { useState, useEffect } from "react"
import { View } from "remax/one";
import classNames from "classnames"
import './index.css'

export default function EggPopup() {
    return (
        <View>
            <View>点击点击点击</View>
            <View className="egg-popup--active">
                <View className="egg-popup__overlay"></View>
                <View className="egg-action-sheet__container">
                    <View></View>
                </View>
            </View>
        </View>
    )
}