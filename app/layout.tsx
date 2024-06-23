import "@/ui/globals.css";
import { notoSansKR } from "@/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Dashboard", default: "Dashboard by next.js" },
  description: "대시보드 프로젝트",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>{children}</body>
    </html>
  );
}
