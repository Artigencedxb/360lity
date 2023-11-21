import { Inter } from "next/font/google";
import "./globals.css";
import LayooutView from "./layout-view";
import { Metadata } from "next";
import ReactQueryProvider from "@/Providers/QueryClientProvider";
import { Toaster } from "sonner";
import LoadingWrapper from "./LoadingWrapper";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "360-lity",

  icons: {
    icon: "/app.ico",
  },
};

//👇 Configure our local font object
const myFont = localFont({ src: '../../public/SF-Compact-Rounded-Regular.ttf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <ReactQueryProvider>
          <LoadingWrapper>
            <LayooutView>{children}</LayooutView>
          </LoadingWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
