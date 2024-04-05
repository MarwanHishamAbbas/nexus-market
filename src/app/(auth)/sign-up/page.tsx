import SignUpForm from "@/components/auth/SignUpForm"
import { FC } from "react"

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="h-[50vh] grid place-content-center max-w-7xl mx-auto px-3">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <p className="text-secondary">
          Welcome to NexusMarket, Please resigter you information below.
        </p>
      </div>
      <SignUpForm />
    </main>
  )
}

export default Page
