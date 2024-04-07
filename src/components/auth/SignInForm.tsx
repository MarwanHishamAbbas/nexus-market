"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { SignInSchema, TSignInSchema } from "@/lib/validator/auth-validators"
import { login } from "@/lib/helpers/auth-helpers/server"

function SignInForm() {
  const router = useRouter()
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: TSignInSchema) {
    const { message, name, status, redirectURL } = await login(values)
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
          {form.control._formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin mr-2" />
          )}
          Sign In
        </Button>
      </form>
      <p className="text-secondary text-sm text-center mt-4">
        Don&apos;t have an account yet?{" "}
        <Link className="underline" href="/sign-up">
          Sign up
        </Link>
      </p>
    </Form>
  )
}

export default SignInForm
