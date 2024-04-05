"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { login } from "@/app/(auth)/actions"

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Passowrd should be at least 8 characters" }),
})

function SignInForm() {
  const router = useRouter()
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient()
    const { error, data } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })
    if (error) {
      toast({ title: error.message, variant: "destructive" })
      return
    }
    toast({ title: "Signed in successfully" })
    router.push("/")
    router.refresh()
  }

  return (
    <Form {...form}>
      <form
        action={login}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
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
    </Form>
  )
}

export default SignInForm
