import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./components/Nav";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio Azure",
  description: "Bespoke graphic design, software development, and branding.",
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
