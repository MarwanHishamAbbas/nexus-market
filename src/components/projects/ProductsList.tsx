import { TQueryValidator } from "@/lib/validator/query-validator"
import { FC } from "react"
import ProductCard from "./ProductCard"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { ArrowRight } from "lucide-react"
import ImageReveal from "@/animations/ImageReveal"

interface ProductsListProps {
  query: TQueryValidator
}

const ProductsList: FC<ProductsListProps> = ({ query }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <h1>{query?.category}</h1>
        <Link
          href="/framer-templates"
          className={buttonVariants({
            variant: "link",
            size: "sm",
            className: "text-secondary",
          })}
        >
          Explore All
          <ArrowRight className="size-5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductsList
