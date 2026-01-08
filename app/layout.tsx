import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "SSA Hunter Valley - Tennis Academy",
  description: "First one stop tennis academy in Asia Pacific",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-matter">
        <Navbar />
        <div className="pt-[6vw]">
          {children}
        </div>
      </body>
    </html>
  );
}
