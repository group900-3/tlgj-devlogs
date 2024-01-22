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
        text: "文档",
        items: [{ text: "简单的设计和复杂的设计", link: "/posts/calculator" }],
      },
    ],
  },
});
