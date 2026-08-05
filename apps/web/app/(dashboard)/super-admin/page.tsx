import React from "react";

export default function SuperAdminPlatformPage() {
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Platform Super-Admin Console</h2>
          <p className="text-slate-500 text-sm">Global SaaS tenant management, subscription tiers, and system metrics</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-sm shadow">
          + Provision New Tenant
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Active Institutional Tenants</span>
          <p className="text-3xl font-black text-indigo-600">142</p>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Candidates</span>
          <p className="text-3xl font-black text-sky-600">1,248,500</p>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Exams Delivered Today</span>
          <p className="text-3xl font-black text-emerald-600">45,210</p>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">System Uptime</span>
          <p className="text-3xl font-black text-emerald-600">99.99%</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-slate-900">Provisioned Institutions</h3>
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase">
              <th className="p-3">Tenant Name</th>
              <th className="p-3">Subdomain</th>
              <th className="p-3">Tier</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-3 font-bold text-slate-900">Oxford University</td>
              <td className="p-3 font-mono text-xs text-slate-600">oxford.platform.com</td>
              <td className="p-3"><span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-bold">ENTERPRISE</span></td>
              <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">ACTIVE</span></td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-900">Stanford Academy</td>
              <td className="p-3 font-mono text-xs text-slate-600">stanford.platform.com</td>
              <td className="p-3"><span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded text-xs font-bold">PRO</span></td>
              <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">ACTIVE</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}