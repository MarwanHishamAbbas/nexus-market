"use server"

import { createClient } from "@/lib/supabase/server"
import {
  TCreateUserSchema,
  TSignInSchema,
} from "@/lib/validator/auth-validators"
import { AuthError } from "@supabase/supabase-js"
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient"
import { redirect } from "next/dist/server/api-utils"

const supabase = createClient()
export async function login(values: TSignInSchema) {
  const { error, data } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  })
  if (error) {
    return {
      message: error.message,
      name: error.status === 400 ? "Not Authenticated" : error.name,
      status: error.code,
    }
  }
  return {
    message: "You Successfully Signed in ",
    name: "Success",
    redirectURL: "/",
    status: 200,
  }
}

export async function signUp(values: TCreateUserSchema) {
  const { error, data } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL!}/sign-in`,
      data: {
        name: values.name,
      },
    },
  })
  if (error) {
    return { message: error.message, name: error.name, status: error.code }
  }
  return {
    message: "Verification link has been sent to" + data.user?.email,
    name: "Verfication Pending",
    status: 200,
    redirectURL: "/sign-in",
  }
}
