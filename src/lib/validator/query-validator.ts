import { z } from "zod"

export const QueryValidator = z.object({
  category: z.string().optional(),
  limit: z.number().optional(),
})

export type TQueryValidator = z.infer<typeof QueryValidator>
