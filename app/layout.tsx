// app/layout.tsx
import "../app/globals.css";
import React from "react";

export const metadata = {
  title: "Hult Prize @ RCCIIT",
  description: "Hult Prize chapter at RCC Institute of Information Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
