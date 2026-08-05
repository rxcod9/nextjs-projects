import { NextResponse } from "next/server";

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Send initial SSE connection message
      controller.enqueue(encoder.encode("data: " + JSON.stringify({ event: "CONNECTED", timestamp: Date.now() }) + "

"));

      // Simulate real-time proctor alert after 3 seconds
      const timer = setTimeout(() => {
        controller.enqueue(
          encoder.encode(
            "data: " + JSON.stringify({ event: "TAB_SWITCH_ALERT", candidateId: "student-101", confidence: 0.92 }) + "

"
          )
        );
      }, 3000);

      return () => clearTimeout(timer);
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}