import { Inter } from "next/font/google";
import "./globals.css";
import LayooutView from "./layoout-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "360-lity",

  icons: {
    icon: "/app.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/app.ico" sizes="any" />
        {/* <link rel="icon" href="/favicon-16x16.png" type="image" sizes="16x16" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image"
          sizes="any"
        /> */}
        <LayooutView>{children}</LayooutView>
      </body>
    </html>
  );
}
