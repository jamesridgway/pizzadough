import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizza Dough Calculator",
  description: "Calculate the perfect pizza dough recipe with customizable parameters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen  font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
