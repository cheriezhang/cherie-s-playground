import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../../public/fonts/parastoo-variablefont_wght.woff2",
  variable: "--font-parastoo",
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Cherie's Playground",
  description: "A frontend blog and experimental platform",
};

const Header = () => {
  return (
    <header className="h-[40px] flex p-4">
      <Link href="/">
        <Image
          src="/snowflake.svg"
          alt="logo"
          width={40}
          height={40}
          priority
        />
      </Link>
      <nav>
        <Link href="/docs">Blogs</Link>
        <Link href="/demos">Demos</Link>
      </nav>
    </header>
  );
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
