import React from "react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Create Candidate Account</h2>
          <p className="text-slate-500 text-xs">Self-registration for practice tests & assessments</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
              <input type="text" placeholder="John" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
              <input type="text" placeholder="Doe" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm" />
          </div>
          <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-sm shadow transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-slate-500">
          Already registered?{" "}
          <Link href="/login" className="text-sky-600 font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}