import React from "react";

export default async function TenantDashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ tenantId: string }>;
}) {
  const { tenantId } = await params;

  return (
    <div
      style={{
        "--color-tenant-primary": "#0284c7",
        "--color-tenant-secondary": "#0f172a",
      } as React.CSSProperties}
      className="min-h-screen bg-slate-50 font-sans"
    >
      <header className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold tracking-tight">
          EdTech SaaS <span className="text-sky-400">[{tenantId.toUpperCase()}]</span>
        </h1>
        <nav className="flex gap-4 text-sm font-medium">
          <a href={`/tenant/${tenantId}/authoring/questions`} className="hover:text-sky-300">Questions</a>
          <a href={`/tenant/${tenantId}/authoring/blueprint-builder`} className="hover:text-sky-300">Exam Builder</a>
          <a href={`/tenant/${tenantId}/analytics`} className="hover:text-sky-300">Analytics</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}