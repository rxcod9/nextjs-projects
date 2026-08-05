import React from "react";

export default async function InterceptedQuestionModal({ params }: { params: Promise<{ tenantId: string; id: string }> }) {
  const { id } = await params;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-100">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-bold text-slate-900">Intercepted Route Modal [{id}]</h3>
          <a href="#" className="text-slate-400 hover:text-slate-600 font-bold">✕</a>
        </div>
        <p className="text-slate-600 text-sm">
          This question modal was loaded using <strong>Next.js Intercepting Routes</strong> without losing the scroll position or context of the underlying Question Bank page!
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border text-xs font-mono">
          Question ID: {id}<br />
          Authoring Mode: HUMAN_CREATED (AI Fallback Active)
        </div>
      </div>
    </div>
  );
}