import { DokzProvider, GithubLink, ColorModeSwitch } from "dokz/dist";
import React from "react";
import Head from "next/head";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Egg UI - 基于 Remax 实现的小程序、H5 组件库</title>
        <link rel="icon" href="/image/setting/fried-egg.svg" />
      </Head>
      <DokzProvider
        headerLogo={<img src="/image/setting/fried-egg.svg" width="40px" />}
        headerItems={[
          <GithubLink key="0" url="https://github.com/xiamu14/egg-ui" />,
          <ColorModeSwitch key="1" />,
        ]}
        sidebarOrdering={{
          "index.mdx": true,
          "通用组件": {
            "button.mdx": true,
            "icon.mdx": true,
          },
        }}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </>
  );
}
