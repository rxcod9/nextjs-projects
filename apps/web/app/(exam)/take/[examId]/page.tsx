import React, { Suspense } from "react";

export const experimental_ppr = true;

async function DynamicTimerStream({ examId }: { examId: string }) {
  // Simulate dynamic server streaming
  return (
    <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl space-y-4">
      <div className="flex justify-between items-center text-sky-400 font-mono text-lg font-bold">
        <span>⏱️ Live Exam Timer</span>
        <span>01:59:59</span>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Q1. What is the main advantage of Next.js 15 Partial Prerendering (PPR)?</h3>
        <div className="space-y-2">
          {["Instant Edge shell loading combined with dynamic streaming", "Replaces database indexing", "Blocks server components"].map((opt, i) => (
            <label key={i} className="flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl cursor-pointer transition">
              <input type="radio" name="q1" className="w-4 h-4 text-sky-500" />
              <span className="text-slate-200 text-sm font-medium">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function ExamDeliveryPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 space-y-6 select-none">
      {/* 1. PPR Static Shell Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            Secure Timed Assessment
          </h1>
          <p className="text-xs text-slate-400">PPR Shell Static Edge Delivery • Exam ID: {examId}</p>
        </div>
        <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
          🟢 Offline Auto-Save Active (IndexedDB Buffer)
        </div>
      </header>

      {/* 2. PPR Dynamic Suspense Stream */}
      <Suspense fallback={<div className="h-64 bg-slate-900 animate-pulse rounded-2xl border border-slate-800" />}>
        <DynamicTimerStream examId={examId} />
      </Suspense>
    </div>
  );
}