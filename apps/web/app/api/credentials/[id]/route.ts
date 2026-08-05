import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const badgePayload = {
    "@context": "https://w3id.org/openbadges/v3",
    id: `https://platform.com/api/credentials/${id}`,
    type: "VerifiableCredential",
    issuer: {
      id: "https://platform.com/issuer",
      type: "Profile",
      name: "Enterprise EdTech SaaS Platform",
    },
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      id: `urn:uuid:${id}`,
      achievement: {
        id: `https://platform.com/achievements/${id}`,
        type: "Achievement",
        name: "Certified Senior Assessment Specialist",
        description: "Passed advanced dynamic assessment with proctoring verification.",
      },
    },
  };

  return NextResponse.json(badgePayload, {
    headers: { "Content-Type": "application/ld+json" },
  });
}