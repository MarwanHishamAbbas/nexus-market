import Image from "next/image"
import Link from "next/link"
import { FC, use } from "react"
import NexusLogo from "../../assets/logo.svg"
import { Button, buttonVariants } from "../ui/button"
import { NAV_LINKS } from "@/app/constants/links"
import { generateSlug } from "@/lib/utils"
import { ArrowRight, User2Icon } from "lucide-react"
import MobileNavbar from "./MobileNavbar"

import UserNav from "../auth/UserNav"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center bg-background/60 backdrop-blur-sm border-b border-input">
      <nav className="max-w-7xl mx-auto px-3 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image src={NexusLogo} alt="Nexus Logo" />
          <span className="font-bold text-lg">NexusMarket</span>
        </Link>
        <ul className="lg:flex gap-8 items-center hidden ">
          {NAV_LINKS.map((link, idx) => (
            <li key={idx}>
              <Link
                className={buttonVariants({ variant: "link" })}
                href={generateSlug(link)}
              >
                {link}
              </Link>
            </li>
          ))}

          <Link
            href="/sign-up"
            className={buttonVariants({
              className: "rounded-lg",
              size: "lg",
            })}
          >
            All-Access Pass <ArrowRight className="size-4 ml-2" />
          </Link>
        </ul>
        <MobileNavbar />
      </nav>
    </header>
  )
}

export default Navbar
