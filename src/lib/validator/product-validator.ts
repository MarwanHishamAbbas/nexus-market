import { z } from 'zod'

const requiredString = z.string().min(1, 'Required').max(300)
const numericAndRequiredString = requiredString.regex(
  /^\d+$/,
  'Must be a number'
)

const productImageSchema = z
  .custom<File>()
  .refine((file) => {
    return !file || (file instanceof File && file.type.startsWith('image/'))
  }, 'Must be an image')
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2
  }, 'Image must be less than 2MB')
const productFileSchema = z.custom<File>().refine((file) => {
  return !file || file.size < 2048 * 2048 * 2
}, 'Image must be less than 4MB')

export const ProductSchema = z.object({
  title: requiredString,
  description: z.string().max(5000).optional(),
  price: numericAndRequiredString,
  category: requiredString,
  fileUrl: productFileSchema,
  imageUrl: productImageSchema,
})

export type TProductSchema = z.infer<typeof ProductSchema>
