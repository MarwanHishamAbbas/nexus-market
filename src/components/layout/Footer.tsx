import Image from "next/image"
import { FC } from "react"
import NexusLogo from "../../assets/logo.svg"
import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="border">
      <div className="max-w-7xl mx-auto px-3 py-16 flex lg:items-center justify-between flex-col lg:flex-row gap-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src={NexusLogo} alt="Nexus Logo" />
            <span className="font-bold text-lg">NexusMarket</span>
          </Link>
          <h4 className="text-lg mt-5">Get 15% off your first order!</h4>
          <p className="text-secondary lg:w-2/3 text-sm my-2">
            Sign up to our mailing list below to get 15% off your first order.
            Don&apos;t worry, we hate spam too.
          </p>
          <form className="flex items-center gap-2">
            <Input
              placeholder="Your email address"
              className="bg-input lg:w-1/2"
            />
            <Button size="lg">Subscribe</Button>
          </form>
        </div>
        <div className="flex items-start gap-8 text-sm">
          <div className="space-y-2">
            <h3>Products</h3>
            <p className="text-secondary">Templates</p>
            <p className="text-secondary">Backgrounds</p>
            <p className="text-secondary">Icons</p>
            <p className="text-secondary">Fonts</p>
          </div>
          <div className="space-y-2">
            <h3>All-Access Pass</h3>
            <p className="text-secondary">Sign Up</p>
            <p className="text-secondary">Login</p>
            <p className="text-secondary">Reset Password</p>
          </div>
          <div className="space-y-2">
            <h3>Information</h3>
            <p className="text-secondary">FAQ</p>
            <p className="text-secondary">Contact Us</p>
            <p className="text-secondary">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
