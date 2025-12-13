import type { Metadata } from "next";
import { Figtree } from "next/font/google"; 
import "./globals.css";

// Configure the Figtree font
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree", // This matches your tailwind.config.ts
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hult Prize - RCC Institute of Information Technology",
  description: "Empowering the next generation of social entrepreneurs at RCCIIT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply the font variable globally */}
      <body className={`${figtree.variable} font-figtree antialiased`}>
        {children}
      </body>
    </html>
  );
}