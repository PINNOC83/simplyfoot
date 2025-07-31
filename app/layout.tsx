import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "SimplyFoot – Gestion clubs amateurs",
  description: "L'application #1 pour gérer un club de foot amateur.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans bg-[#14482F] text-white min-h-screen antialiased">
        <Navbar />
        <main className="w-full pt-20">{children}</main>
      </body>
    </html>
  );
}
