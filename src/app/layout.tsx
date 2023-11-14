import { Inter } from "next/font/google";
import "./globals.css";
import LayooutView from "./layout-view";
import { Metadata } from "next";
import ReactQueryProvider from "@/Providers/QueryClientProvider";

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
        <ReactQueryProvider>
          <LayooutView>{children}</LayooutView>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
