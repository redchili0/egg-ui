import React, { useState, useEffect } from 'react';
import { 
  EggModal, EggModalHeader, EggModalContent, EggModalAction 
} from '@redchili/egg-ui';
import { View, Button } from 'remax/one';
import './index.css'

export default function modalDemo () {

  const [isOpened, setIsOpened] = useState(false)
  const [isOpened1, setIsOpened1] = useState(false)
  const [isOpened2, setIsOpened2] = useState(false)
  const [isOpened3, setIsOpened3] = useState(false)
  const [isOpened4, setIsOpened4] = useState(false)

  useEffect(() => {
    console.log(isOpened)
  }, [isOpened])

  const handleClick = () => {
    console.log('ddd')
    setIsOpened(true)
  }

  const handCancel = () => {

  }

  return (
    <View>
        <View className="modal_demo">
          <View className="tit">正常使用</View>
          <Button onTap={() => setIsOpened1(true)}>点击</Button>
          <EggModal
            isOpened={isOpened1}
            onAfterClose={() => setIsOpened1(false)}
            
          >
            <EggModalHeader>我是正常使用标题</EggModalHeader>
            <EggModalContent>我是正常使用内容</EggModalContent>
            <EggModalAction>
              <Button onTap={() => setIsOpened1(false)}>确认</Button>
              <Button>取消</Button>
            </EggModalAction>
          </EggModal>
        </View>
        <View className="modal_demo">
          <View className="tit">简化使用</View>
          <Button onTap={handleClick}>点击</Button>
          <EggModal
            isOpened={isOpened}
            title="我是标题"
            content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            confirmText="确认"
            cancelText="取消"
            onAfterClose={() => setIsOpened(false)}
            onCancel={() => setIsOpened(false)}
          />
        </View>
        <View className="modal_demo">
          <View className="tit">单个按钮</View>
          <Button onTap={() => setIsOpened2(true)}>点击</Button>
          <EggModal
            isOpened={isOpened2}
            title="我是标题"
            content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            confirmText="确认"
            onAfterClose={() => setIsOpened2(false)}
            onConfirm={() => setIsOpened2(false)}
          />
        </View>
        <View className="modal_demo">
          <View className="tit">无标题</View>
          <Button onTap={() => setIsOpened3(true)}>点击</Button>
          <EggModal
            isOpened={isOpened3}
            content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            confirmText="确认"
            onAfterClose={() => setIsOpened3(false)}
            onConfirm={() => setIsOpened3(false)}
          />
        </View>
    </View>
  );
};
