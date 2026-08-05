"use client";

import React, { useState } from "react";

export default function BlindGradingCenterPage() {
  const [rubricScores, setRubricScores] = useState({
    clarity: 8,
    correctness: 9,
    depth: 7,
  });

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Double-Blind Essay Evaluation Center</h2>
        <p className="text-slate-500 text-sm">Evaluate subjective responses anonymously with rubric assistance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="font-bold text-slate-800">Anonymous Submission #SUB-8821</h3>
            <span className="px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">Blind Mode Active</span>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase">Prompt</h4>
            <p className="text-sm font-medium text-slate-900">Discuss the trade-offs of microservices vs monolith architecture for high-concurrency SaaS applications.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase">Candidate Response</h4>
            <div className="p-4 bg-slate-50 border rounded-xl text-xs text-slate-700 leading-relaxed max-h-64 overflow-y-auto font-mono">
              Microservices provide independent scaling and technology isolation at the cost of operational complexity...
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-900">Configurable Rubric Scoring</h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>1. Clarity & Structure (Max 10)</span>
                <span className="text-sky-600">{rubricScores.clarity}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={rubricScores.clarity}
                onChange={(e) => setRubricScores({ ...rubricScores, clarity: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>2. Technical Correctness (Max 10)</span>
                <span className="text-sky-600">{rubricScores.correctness}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={rubricScores.correctness}
                onChange={(e) => setRubricScores({ ...rubricScores, correctness: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>

          <div className="p-4 bg-sky-50 border border-sky-100 rounded-xl space-y-1">
            <span className="text-[10px] font-bold uppercase text-sky-600">AI Grading Assistant Suggestion</span>
            <p className="text-xs text-slate-700">Suggested Score: <strong>24/30</strong>. High technical accuracy, well-structured response.</p>
          </div>

          <button className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-sm shadow transition">
            Submit Final Evaluation Score ({rubricScores.clarity + rubricScores.correctness + rubricScores.depth}/30)
          </button>
        </div>
      </div>
    </div>
  );
}