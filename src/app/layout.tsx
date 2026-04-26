import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATTA AI创客实战营 — 面向青少年的AI教育课程",
  description: "ATTA（阿塔）是你的AI学习伙伴。面向8-15岁青少年的开源AI教育课程体系，从兴趣培养到竞赛冲刺，三轨九级，实战为主。",
  keywords: ["AI教育", "青少年编程", "人工智能课程", "ATTA", "AI创客", "少儿AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
