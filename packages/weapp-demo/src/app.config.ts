/*
 * @Author: Pluto
 * @Date: 2020-05-28 22:46:18
 * @LastEditors: Pluto
 */

import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    "pages/index/index", 
    "pages/flex/flex", 
    "pages/form/index", 
    "pages/icon/index"
  ],
  window: {
    navigationBarTitleText: "Remax Wechat Demo - EGG-UI",
    navigationBarBackgroundColor: "#282c34",
  },
};

export default config;
