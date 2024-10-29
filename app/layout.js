import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./components/Nav";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio Azure",
  description: "Bespoke graphic design, software development, and branding.",
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'apple-touch-icon', url: '/apple-icon1.png', sizes: '512x512' },
      { rel: 'icon', type: 'image/png', url: '/icon1.png', sizes: '192x192' },
      { rel: 'icon', type: 'image/png', url: '/icon2.png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({ children }) {

  return (
    <html className="overflow-hidden scroll-smooth" lang="en">
      <body className={inter.className}>
        <Nav />
        <Background />
        <main>{children}</main>
      </body>
    </html>
  );
}
