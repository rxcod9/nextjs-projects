import { pgTable, uuid, varchar, timestamp, boolean, pgEnum, jsonb } from 'drizzle-orm/pg-core';

export const tenantSubscriptionTier = pgEnum('subscription_tier', ['BASIC', 'PRO', 'ENTERPRISE']);

export const tenants = pgTable('tenants', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  subdomain: varchar('subdomain', { length: 63 }).notNull().unique(),
  customDomain: varchar('custom_domain', { length: 255 }).unique(),
  tier: tenantSubscriptionTier('tier').default('BASIC').notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  themeConfig: jsonb('theme_config').$type<{
    primaryColor: string;
    secondaryColor: string;
    logoUrl?: string;
    fontFamily: string;
  }>().default({
    primaryColor: '#0284c7',
    secondaryColor: '#0f172a',
    fontFamily: 'Inter, sans-serif'
  }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().$onUpdate(() => new Date()).notNull(),
});
