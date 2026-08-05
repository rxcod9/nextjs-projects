import React, { Suspense } from "react";

export default function AnalyticsDashboardLayout({
  children,
  cohorts,
  passrates,
  benchmarks,
}: {
  children: React.ReactNode;
  cohorts: React.ReactNode;
  passrates: React.ReactNode;
  benchmarks: React.ReactNode;
}) {
  return (
    <div className="p-6 space-y-6">
      <div>{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Suspense fallback={<div className="h-48 bg-slate-200 animate-pulse rounded-xl" />}>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">{cohorts}</div>
        </Suspense>
        <Suspense fallback={<div className="h-48 bg-slate-200 animate-pulse rounded-xl" />}>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">{passrates}</div>
        </Suspense>
        <Suspense fallback={<div className="h-48 bg-slate-200 animate-pulse rounded-xl" />}>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">{benchmarks}</div>
        </Suspense>
      </div>
    </div>
  );
}