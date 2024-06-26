import "@/assets/scss/style.scss";
import Link from "next/link";

export const metadata = {
  title: "Next.js를 사용한 포트폴리오입니다.",
  description: "Generated by create next app",
  keywords: ["포트폴리오", "넥스트", "로하"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Link rel="icon" type="image/svg+xml" href="favicon.svg"></Link>
      <body>{children}</body>
    </html>
  );
}
