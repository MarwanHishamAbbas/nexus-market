import { FC } from "react"
import Image from "next/image"
import React from "react"
import patternLeft from "../../assets/pattern-left.svg"
import patternRight from "../../assets/pattern-right.svg"
import { Button } from "../ui/button"

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 -space-x-24 text-center">
      <Image src={patternRight} alt="Pattern" />

      <div className="col-span-2 space-y-6 z-10 bg-blur rounded-lg px-10 py-24">
        <h1 className="text-4xl font-semibold">
          Want unlimited access to <br /> our entire catalogue?
        </h1>
        <p className="text-secondary text-sm lg:w-3/4 mx-auto">
          Get unlimited access to our full collection of templates, backgrounds,
          mockups, fonts and more and take your workflow to the next level.
        </p>
        <Button>Get All-Access Pass</Button>
      </div>
      <Image src={patternLeft} alt="Pattern" />
    </div>
  )
}

export default Banner

/* div.framer-wcw6dn */
