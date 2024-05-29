import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./components/Nav";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio Azure | Home",
  description: "Bespoke graphic design, software development, and branding.",
};

export default function RootLayout({ children }) {

  let f = true

  const colors = {1: "#dd1c1a", 2: "#06aed5", 3: "#fff1d0", 4: "#086788"} 

  return (
    <html className="overflow-hidden scroll-smooth" lang="en">
      <body className={inter.className}>
        <Nav f={f} />
        <Background colors={colors} />
        <main>{children}{f}</main>
      </body>
    </html>
  );
}
