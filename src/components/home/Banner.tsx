import { FC } from "react"
import Image from "next/image"
import React from "react"
import patternLeft from "../../assets/pattern-left.svg"
import patternRight from "../../assets/pattern-right.svg"
import { Button } from "../ui/button"
import MaskText from "@/animations/MaskText"
import Block from "@/animations/Block"
import ImageReveal from "@/animations/ImageReveal"

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 -space-y-24 lg:-space-y-0 lg:-space-x-24 text-center">
      <ImageReveal>
        <Image
          data-scroll
          data-scroll-speed={-0.1}
          src={patternRight}
          alt="Pattern"
        />
      </ImageReveal>

      <Block className="col-span-2 space-y-6 z-10 bg-blur rounded-lg px-2 lg:px-8 py-24 border">
        <h1 className="text-4xl font-semibold">
          Want unlimited access to <br /> our entire catalogue?
        </h1>

        <p className="text-secondary text-sm lg:w-3/4 mx-auto">
          Get unlimited access to our full collection of templates, backgrounds,
          mockups, fonts and more and take your workflow to the next level.
        </p>
        <Button>Get All-Access Pass</Button>
      </Block>
      <ImageReveal>
        <Image
          data-scroll
          data-scroll-speed={0.1}
          src={patternLeft}
          alt="Pattern"
        />
      </ImageReveal>
    </div>
  )
}

export default Banner
