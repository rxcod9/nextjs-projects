import { db } from "./client";
import { tenants, users } from "./schema";

export async function seed() {
  console.log("🌱 Seeding database sample data...");

  const oxfordTenant = await db.insert(tenants).values({
    name: "Oxford University",
    subdomain: "oxford",
    customDomain: "exams.oxford.edu",
    tier: "ENTERPRISE",
    themeConfig: {
      primaryColor: "#002147",
      secondaryColor: "#0f172a",
      fontFamily: "Inter, sans-serif",
    },
  }).returning();

  const stanfordTenant = await db.insert(tenants).values({
    name: "Stanford Academy",
    subdomain: "stanford",
    customDomain: "exams.stanford.edu",
    tier: "PRO",
    themeConfig: {
      primaryColor: "#8C1515",
      secondaryColor: "#171717",
      fontFamily: "Roboto, sans-serif",
    },
  }).returning();

  console.log("✅ Seeded tenants:", oxfordTenant[0].subdomain, stanfordTenant[0].subdomain);
}

if (require.main === module) {
  seed().catch(console.error);
}