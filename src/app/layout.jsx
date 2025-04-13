import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "鎧神社（よろいじんじゃ）公式サイト --平将門の鎧が眠ると伝えられる北新宿の神社--",
  description: "伝説の地・鎧神社へ、社殿で手を合わせれば、悠久の歴史を感じられます",
};

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body /*className={`${geistSans.variable} ${geistMono.variable}`}*/>
        {children}
      </body>
    </html>
  );
}
