import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import NexusLogo from "../../assets/logo.svg"
import { Button, buttonVariants } from "../ui/button"
import { NAV_LINKS } from "@/app/constants/links"
import { generateSlug } from "@/lib/utils"
import { ArrowRight, User2Icon } from "lucide-react"
import MobileNavbar from "./MobileNavbar"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
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
            href="/sign-in"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Sign In <User2Icon className="size-4 ml-2" />
          </Link>
          <Link
            href="/sign-uo"
            className={buttonVariants({ className: "rounded-lg", size: "lg" })}
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
