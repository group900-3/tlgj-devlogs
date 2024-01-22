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
        text: "软件设计",
        items: [
          {
            text: "鸡尾酒计算器与元信息",
            link: "/posts/calculator",
          },
        ],
      },
    ],
  },
});
