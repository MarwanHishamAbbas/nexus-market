"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import {
  CreateUserSchema,
  TCreateUserSchema,
} from "@/lib/validator/auth-validators"
import { signUp } from "@/lib/helpers/auth-helpers/server"

function SignUpForm() {
  const router = useRouter()
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: TCreateUserSchema) {
    const { message, name, redirectURL } = await signUp(values)
    toast({
      title: name,
      description: message,
    })
    router.push(redirectURL ?? "")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size="lg"
          type="submit"
          className="w-full"
          disabled={form.control._formState.isSubmitting}
        >
          Sign Up
          {form.control._formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin ml-2" />
          )}
        </Button>
      </form>
      <p className="text-secondary text-sm text-center mt-4">
        Already have an account?{" "}
        <Link className="underline" href="/sign-in">
          Sign In
        </Link>
      </p>
    </Form>
  )
}

export default SignUpForm
