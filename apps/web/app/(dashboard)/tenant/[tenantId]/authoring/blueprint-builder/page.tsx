"use client";

import React, { useState } from "react";

interface BlueprintSection {
  id: string;
  title: string;
  questionCount: number;
  difficulty: string;
}

export default function BlueprintBuilderPage() {
  const [sections, setSections] = useState<BlueprintSection[]>([
    { id: "sec-1", title: "Section A: Core Algorithms & Data Structures", questionCount: 10, difficulty: "MEDIUM" },
    { id: "sec-2", title: "Section B: System Design & Architecture", questionCount: 5, difficulty: "HARD" },
    { id: "sec-3", title: "Section C: Multiple Choice Aptitude", questionCount: 15, difficulty: "EASY" },
  ]);

  const moveSection = (index: number, direction: "up" | "down") => {
    const newSections = [...sections];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSections.length) return;
    const temp = newSections[index];
    newSections[index] = newSections[targetIndex];
    newSections[targetIndex] = temp;
    setSections(newSections);
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Exam Blueprint Builder</h2>
        <p className="text-slate-500 text-sm">Organize, sequence, and randomize test paper sections</p>
      </div>

      <div className="space-y-3">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm flex justify-between items-center"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 font-bold">#{idx + 1}</span>
                <h4 className="font-bold text-slate-800">{section.title}</h4>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{section.questionCount} Questions</span>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded">{section.difficulty}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => moveSection(idx, "up")}
                disabled={idx === 0}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-xs font-bold"
              >
                ▲ Move Up
              </button>
              <button
                onClick={() => moveSection(idx, "down")}
                disabled={idx === sections.length - 1}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded text-xs font-bold"
              >
                ▼ Move Down
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <button className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-sm">
          Save Draft
        </button>
        <button className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-sm shadow">
          Publish Blueprint
        </button>
      </div>
    </div>
  );
}