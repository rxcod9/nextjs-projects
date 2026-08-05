import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Sign In to Your Institution</h2>
          <p className="text-slate-500 text-xs">Enter your institutional credentials or single sign-on</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Institutional Email</label>
            <input
              type="email"
              placeholder="user@oxford.edu"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg text-sm shadow transition"
          >
            Sign In with Credentials
          </button>
        </form>

        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-2 text-slate-400 text-xs uppercase font-medium absolute">Or</span>
        </div>

        <button className="w-full py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition">
          🔐 Single Sign-On (SAML / Okta)
        </button>

        <p className="text-center text-xs text-slate-500">
          Need an account?{" "}
          <Link href="/signup" className="text-sky-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}