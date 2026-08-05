import { pgTable, uuid, varchar, timestamp, pgEnum, index } from 'drizzle-orm/pg-core';
import { tenants } from './tenants';

export const userRole = pgEnum('role', ['STUDENT', 'FACULTY', 'ADMIN', 'SUPER_ADMIN']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  tenantId: uuid('tenant_id').notNull().references(() => tenants.id, { onDelete: 'cascade' }),
  email: varchar('email', { length: 255 }).notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  role: userRole('role').default('STUDENT').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  tenantEmailIdx: index('idx_users_tenant_email').on(table.tenantId, table.email),
}));
