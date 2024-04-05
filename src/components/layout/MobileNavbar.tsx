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

function MobileNavbar() {
  const router = useRouter()
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
          <DropdownMenuItem
            onClick={() => router.push("/sign-up")}
            className={buttonVariants({ size: "lg", className: "w-full" })}
          >
            All-Acess Pass <ArrowRight className="size-4 ml-2" />
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileNavbar
