import React from "react";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          fontFamily: "sans-serif",
          border: "16px solid #38bdf8",
        }}
      >
        <h1 style={{ fontSize: 54, color: "#38bdf8" }}>OFFICIAL CERTIFICATE OF COMPLETION</h1>
        <p style={{ fontSize: 24, color: "#94a3b8" }}>This certifies that candidate ID</p>
        <h2 style={{ fontSize: 42, color: "#f8fafc", margin: "10px 0" }}>{id}</h2>
        <p style={{ fontSize: 24, color: "#94a3b8" }}>has successfully passed the examination.</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}