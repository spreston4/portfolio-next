import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Preston Dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="w-screen bg-prim-light">
        <div className="w-full relative z-0">
          <div className="w-full relative z-20">{children}</div>
          <div className="w-full h-full bg-dots absolute z-10 bottom-0 left-0"></div>
        </div>
      </body>
    </html>
  );
}
