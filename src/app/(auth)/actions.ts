"use server"

import { createClient } from "@/lib/supabase/server"

export async function login(formData: FormData) {
  const supabase = createClient()
  console.log(formData.get("email") as string)
}
