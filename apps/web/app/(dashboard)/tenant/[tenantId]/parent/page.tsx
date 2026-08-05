import React from "react";

export default async function ParentDashboardPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Parent & Guardian Progress Portal</h2>
          <p className="text-slate-500 text-sm">Monitor student academic performance, attendance, and credentials</p>
        </div>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold rounded-full text-xs">
          Student ID: STU-9901
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Overall Attendance</span>
          <p className="text-3xl font-black text-emerald-600">96.8%</p>
          <span className="text-[10px] text-emerald-600 font-bold">✓ Verified via QR / Facial Auth</span>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Average Score</span>
          <p className="text-3xl font-black text-sky-600">89.5%</p>
          <span className="text-[10px] text-sky-600 font-bold">Top 5% Cohort Rank</span>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase">Certificates Earned</span>
          <p className="text-3xl font-black text-purple-600">4 Badges</p>
          <span className="text-[10px] text-purple-600 font-bold">Verifiable OpenBadges v3</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-slate-900">Recent Assessment Performance</h3>
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase">
              <th className="p-3">Assessment Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Score</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-3 font-medium text-slate-800">Advanced Algorithms Midterm</td>
              <td className="p-3 text-slate-500">Aug 2, 2026</td>
              <td className="p-3 font-bold text-emerald-600">92/100</td>
              <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">PASSED</span></td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-slate-800">System Architecture Quiz</td>
              <td className="p-3 text-slate-500">Jul 28, 2026</td>
              <td className="p-3 font-bold text-sky-600">87/100</td>
              <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">PASSED</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}