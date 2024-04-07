import db from "@/lib/supabase/db"
import { products } from "@/lib/supabase/schema"
import { FC } from "react"

interface CreateProductFormProps {}

const CreateProductForm: FC<CreateProductFormProps> = async ({}) => {
  const insertion = await db
    .insert(products)
    .values({
      name: "First Product",
      description: "First Product Description",
      fileURL: "",
      imageURL: "",
    })
  console.log(insertion)
  return <div>Product Form</div>
}

export default CreateProductForm
