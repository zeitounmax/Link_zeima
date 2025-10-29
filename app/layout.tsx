import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiry Maximilien(Zeima) - Mes Liens",
  description: "Tous les liens pour me contacter",
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
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
