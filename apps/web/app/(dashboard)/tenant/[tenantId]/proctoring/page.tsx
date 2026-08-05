"use client";

import React, { useState, useEffect } from "react";

interface TelemetryAlert {
  event: string;
  candidateId?: string;
  confidence?: number;
  timestamp: number;
}

export default function ProctorDeskPage() {
  const [alerts, setAlerts] = useState<TelemetryAlert[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/proctor/stream");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setAlerts((prev) => [data, ...prev]);
    };

    return () => eventSource.close();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Live Invigilator Proctor Desk</h2>
        <p className="text-slate-500 text-sm">Streaming telemetry cheating alerts via Server-Sent Events (SSE)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span>📹 Active Candidate Video Grid</span>
            <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Live WebRTC</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-xl h-48 flex items-center justify-center border border-slate-700 relative">
              <span className="text-xs text-slate-400">Student 101 Stream</span>
              <span className="absolute top-2 right-2 px-2 py-0.5 bg-emerald-600 text-white text-[10px] rounded font-bold">NORMAL</span>
            </div>
            <div className="bg-slate-800 rounded-xl h-48 flex items-center justify-center border border-amber-500/50 relative">
              <span className="text-xs text-slate-400">Student 102 Stream</span>
              <span className="absolute top-2 right-2 px-2 py-0.5 bg-amber-600 text-white text-[10px] rounded font-bold animate-pulse">FLAGGED</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Real-Time Telemetry Stream</h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {alerts.length === 0 ? (
              <p className="text-xs text-slate-400 italic">Waiting for SSE events...</p>
            ) : (
              alerts.map((al, i) => (
                <div key={i} className="p-3 bg-slate-50 border rounded-lg text-xs space-y-1">
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-800">{al.event}</span>
                    <span className="text-slate-400">{new Date(al.timestamp).toLocaleTimeString()}</span>
                  </div>
                  {al.candidateId && (
                    <p className="text-slate-600">Candidate: <strong>{al.candidateId}</strong> (Confidence: {al.confidence})</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}