import React from "react";
import "./globals.css";

export const metadata = {
  title: "Enterprise Multi-Tenant EdTech Assessment SaaS",
  description: "Production-ready assessment provider platform powered by Next.js 15 App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-slate-50">{children}</body>
    </html>
  );
}