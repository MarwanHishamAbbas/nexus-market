"use client"

import { ArrowRight, Menu } from "lucide-react"

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
              <DropdownMenuItem key={idx}>{link}</DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={buttonVariants({ size: "lg", className: "w-full" })}
          >
            All-Acess Pass <ArrowRight className="size-4 ml-2" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileNavbar
