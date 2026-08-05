import React from "react";
import Link from "next/link";

export default function GlobalLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center space-y-8">
      <div className="space-y-4 max-w-2xl">
        <span className="px-3 py-1 bg-sky-500/20 border border-sky-500/30 text-sky-400 rounded-full text-xs font-bold tracking-wide uppercase">
          Next.js 15 App Router Showcase
        </span>
        <h1 className="text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
          Multi-Tenant EdTech Exam & Assessment SaaS
        </h1>
        <p className="text-slate-400 text-lg">
          Enterprise assessment platform demonstrating Edge Subdomain Middleware, PPR Timed Delivery, Parallel Routes, Intercepting Question Modals, and Pluggable Gateways.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <Link
          href="/tenant/oxford/authoring/questions"
          className="p-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2"
        >
          🏛️ Visit Oxford Portal
        </Link>
        <Link
          href="/tenant/stanford/authoring/questions"
          className="p-4 bg-rose-700 hover:bg-rose-600 text-white font-bold rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2"
        >
          🌲 Visit Stanford Portal
        </Link>
      </div>
    </div>
  );
}