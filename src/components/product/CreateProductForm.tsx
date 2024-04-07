"use client"

import { FC, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"

import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

import {
  ProductSchema,
  TProductSchema,
} from "@/lib/validator/product-validator"

interface CreateProductFormProps {}

const CreateProductForm: FC<CreateProductFormProps> = ({}) => {
  const [file, setFile] = useState<File>()
  const router = useRouter()
  const { toast } = useToast()
  // 1. Define your form.

  const form = useForm<TProductSchema>({
    resolver: zodResolver(ProductSchema),
  })

  // 2. Define a submit handler.
  async function onSubmit(values: TProductSchema) {}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className=" gap-1 w-fit ml-auto mb-4">
          <PlusCircle className="size-5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Product
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Product Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Product Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Create Product</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateProductForm
