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
      <body className="w-[calc(100dvw)] bg-prim-light p-0">
        <div className="min-w-full relative z-0 p-0">
          <div className="min-w-full relative z-20 p-0">{children}</div>
          <div className="min-w-full h-full bg-dots absolute z-10 bottom-0 left-0 p-0"></div>
        </div>
      </body>
    </html>
  );
}
