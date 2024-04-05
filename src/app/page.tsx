import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="mt-10">
      <Button>Click me</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"link"}>link</Button>
    </div>
  )
}
