import { z } from "zod"

export const ProductSchema = z.object({
  title: z.string().min(1, "Please Enter a name for a product"),
  description: z.string().min(1, "Please Enter a product description"),
})

export type TProductSchema = z.infer<typeof ProductSchema>
