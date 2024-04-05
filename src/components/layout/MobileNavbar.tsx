"use client"

import { ArrowRight, LogOut, Menu } from "lucide-react"

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

function MobileNavbar({ user }: { user: User | null }) {
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
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Browse Cateogries</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {NAV_LINKS.map((link, idx) => (
              <DropdownMenuItem
                key={idx}
                onClick={() => router.push(`/${generateSlug(link)}`)}
              >
                {link}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {user ? (
            <DropdownMenuItem onClick={signOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              onClick={() => router.push("/sign-up")}
              className={buttonVariants({ size: "lg", className: "w-full" })}
            >
              All-Acess Pass <ArrowRight className="size-4 ml-2" />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileNavbar
