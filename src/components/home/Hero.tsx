import Image from "next/image"
import React from "react"
import { Input } from "../ui/input"
import { Mouse, PaintRollerIcon, PlayIcon } from "lucide-react"
import patternLeft from "../../assets/pattern-left.svg"
import patternRight from "../../assets/pattern-right.svg"
import marwan from "../../assets/Marwan.jpeg"

const HomeHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 text-center">
      <Image src={patternLeft} alt="Pattern" />
      <div className="col-span-2 space-y-6">
        <div className="inline-flex gap-2 items-center justify-center">
          <span className="text-sm text-secondary">Created By</span>
          <Image
            src={marwan}
            alt="Marwan"
            className="rounded-full size-10 object-cover"
          />
          <h3 className="font-medium text-sm">Marwan Hisham</h3>
        </div>
        <h1 className="text-3xl">The Future Of E-Commerce</h1>
        <p className="text-secondary text-sm">
          Ultimate Framer template to transform your website into an eCommerce
          powerhouse. Sell digital products easily & beautifully, powered by the
          Framer CMS.{" "}
        </p>
        <Input
          placeholder="Ex....Website Templates"
          className="lg:w-3/4 mx-auto"
        />
        <div className="flex  flex-wrap justify-evenly gap-2 text-xs text-secondary ">
          <div className="flex items-center gap-2">
            <PaintRollerIcon />
            <p>Easily Customizable</p>
          </div>
          <div className="flex items-center gap-2">
            <PlayIcon />
            <p>Lightning Fast</p>
          </div>
          <div className="flex items-center gap-2">
            <Mouse />
            <p>One-Click Import</p>
          </div>
        </div>
      </div>
      <Image src={patternRight} alt="Pattern" className="hidden lg:block" />
    </div>
  )
}

export default HomeHero
