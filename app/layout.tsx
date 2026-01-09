import type { Metadata } from "next";
import "./globals.css";

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
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
