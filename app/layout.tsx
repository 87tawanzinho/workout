import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Roboto, Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <body className={roboto.className}>{children}</body>
    </>
  );
}
