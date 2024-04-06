"use client"

import { ArrowRight, LogOut, Menu, User2Icon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NAV_LINKS } from "@/app/constants/links"
import { generateSlug } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { createClient } from "@/lib/supabase/client"

function UserNav({ user }: { user: User | null }) {
  const supabase = createClient()
  const router = useRouter()
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log("Error Signin out")
    }
    router.push("/sign-in")
    router.refresh()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <User2Icon className="size-4 mr-2" />
          My Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          Hello, <br />
          <span className="text-secondary">
            {user?.identities![0].identity_data!.name || user?.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={signOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav
