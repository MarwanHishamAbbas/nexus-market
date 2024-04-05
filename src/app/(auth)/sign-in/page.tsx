import SignInForm from "@/components/auth/SignInForm"
import SignUpForm from "@/components/auth/SignUpForm"
import { FC } from "react"

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="h-[50vh] grid place-content-center max-w-7xl mx-auto px-3">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <p className="text-secondary">
          Welcome back to NexusMarket, Please login you information below.
        </p>
      </div>
      <SignInForm />
    </main>
  )
}

export default Page
