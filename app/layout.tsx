import type { Metadata } from "next";
import { SUSE } from "next/font/google";
import "./globals.css";

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeima (Linktree Maison)",
  description: "Ici pour me contacter",
  icons: {
    icon: [
      {
        url: "/me_remix.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suse.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
