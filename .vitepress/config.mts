import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TLGJ Devlogs",
  description: "调了个酒开发日志",
  themeConfig: {
    logo: {
      light: "/logo.svg",
      dark: "/logo-offwhite.svg",
    },
    sidebar: [
      {
        text: "增强",
        items: [
          {
            text: "鸡尾酒计算器与元信息",
            link: "/posts/calculator",
          },
          {
            text: "用户生成的鸡尾酒内容",
            link: "/posts/user-generated",
          },
          {
            text: "酒后驾驶",
            link: "/posts/drunk-driving",
          },
        ],
      },
      {
        text: "策略",
        items: [
          {
            text: "策略：长期存续",
            link: "/posts/long-term-extinction",
          },
          {
            text: "策略：金刚不坏",
            link: "/posts/bullet-proof",
          },
        ],
      },
    ],
  },
});
