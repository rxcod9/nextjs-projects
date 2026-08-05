import React from "react";
import Link from "next/link";

const sampleQuestions = [
  { id: "q-101", title: "Calculate Time Complexity of Binary Search", type: "MCQ", difficulty: "EASY" },
  { id: "q-102", title: "Implement LRU Cache in TypeScript", type: "CODING", difficulty: "HARD" },
  { id: "q-103", title: "Discuss Trade-offs of Microservices vs Monolith", type: "SUBJECTIVE", difficulty: "MEDIUM" },
];

export default async function QuestionBankPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Question Bank</h2>
          <p className="text-slate-500 text-sm">Manage, categorize, and inspect questions</p>
        </div>
        <button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow">
          + Add Question
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider">
              <th className="p-4">Title</th>
              <th className="p-4">Type</th>
              <th className="p-4">Difficulty</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {sampleQuestions.map((q) => (
              <tr key={q.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">{q.title}</td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs font-semibold bg-sky-100 text-sky-800 rounded">
                    {q.type}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded">
                    {q.difficulty}
                  </span>
                </td>
                <td className="p-4">
                  <Link
                    href={`/tenant/${tenantId}/authoring/questions/${q.id}`}
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Quick Inspect (Modal)
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}