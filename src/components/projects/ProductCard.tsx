import Image from "next/image"
import { FC } from "react"
import productImage from "../../assets/product.png"

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = ({}) => {
  return (
    <div>
      <Image src={productImage} alt="Image" className="rounded-lg w-full" />
      <div className="mt-2 flex items-center justify-between">
        <div>
          <h4 className="text-sm">Framer Templage</h4>
          <p className="text-xs text-secondary">Personal</p>
        </div>
        <span className="text-xs text-secondary">$39</span>
      </div>
    </div>
  )
}

export default ProductCard
