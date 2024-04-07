import { pgTable, text, uuid } from "drizzle-orm/pg-core"

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("title").notNull(),
  description: text("description").notNull(),
  fileURL: text("file_url").notNull(),
  imageURL: text("image_url").notNull(),
})
