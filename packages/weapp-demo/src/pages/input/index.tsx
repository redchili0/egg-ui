import React, { useState } from 'react';
import { EggInput } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'

export default function InputWrap() {
	const [value, setValue] = useState('')

	return (
		<View>
			<View className="input_demo">
				<View className="tit">基础用法</View>
				<EggInput
					value={value}
					placeholder="input-demo"
					type="text"
					name="input1"
					onInput={(e) => setValue(e.target.value)}
				></EggInput>
				<EggInput
					required
					title="标准五个字"
					value={value}
					type="text"
					name="input2"
					onInput={(e) => setValue(e.target.value)}
				></EggInput>
				<EggInput
					title="字多了就断行"
					type="number"
					name="input3"
				/>
			</View>
			<View className="input_demo">
				<View className="tit">自定义右边</View>
				<EggInput
					title="标准五个字"
					value={value}
					placeholder="class"
					type="text"
					name="input4"
					onInput={(e) => setValue(e.target.value)}
				>
					<View style={{ width: '130px', fontSize: '24px', textAlign: 'center' }}>发送验证码</View>
				</EggInput>
			</View>
			<View className="input_demo">
				<View className="tit">状态</View>
				<EggInput
					disabled
					title="禁用"
					value={value}
					placeholder="disabled"
					type="text"
					name="input4"
					onInput={(e) => setValue(e.target.value)}
				></EggInput>
				<EggInput
					editable
					title="只读"
					value={value}
					placeholder="editable"
					type="text"
					name="input4"
					onInput={(e) => setValue(e.target.value)}
				></EggInput>
			</View>
			<View className="input_demo">
				<View className="tit">类型</View>
				<EggInput
					title="数字"
					value={value}
					placeholder="number"
					type="number"
					name="input4"
					onInput={(e) => setValue(e.target.value)}
				></EggInput>
				<EggInput
					title="密码"
					value={value}
					placeholder="password"
					password
					name="input4"
					onInput={(e) => setValue(e.target.value)}
				></EggInput>
			</View>

		</View>
	);
};
