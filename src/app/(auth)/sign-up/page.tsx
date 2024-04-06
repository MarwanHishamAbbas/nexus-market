import SignUpForm from "@/components/auth/SignUpForm"
import Image from "next/image"
import { FC } from "react"
import authPattern from "../../../assets/auth-pattern.png"

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="relative">
      <Image
        src={authPattern}
        alt="authpattern"
        className="absolute top-0 left-0 right-0 -z-10 w-full h-full"
      />
      <main className="h-[70vh] grid place-content-center bg-gradient-to-t from-30% from-background/90 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <p className="text-secondary">
              Welcome to NexusMarket, Please resigter you information below.
            </p>
          </div>
          <SignUpForm />
        </div>
      </main>
    </div>
  )
}

export default Page
