import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATTA AI创客实战营 — 10-15岁 AI 学习作品课",
  description:
    "ATTA（阿塔）— 面向10-15岁青少年的 AI 学习作品课，20课×120分钟，让孩子用 AI 做出反过来帮助自己学习的作品。",
  keywords: ["AI教育", "青少年AI课程", "人工智能课程", "ATTA", "AI创客", "少儿AI", "AI学习作品法"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
