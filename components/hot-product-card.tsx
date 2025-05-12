import Image from "next/image"
import { Heart } from "lucide-react"

interface HotProductCardProps {
  image: string
  title: string
  originalPrice: number
  salePrice: number
}

export default function HotProductCard({ image, title, originalPrice, salePrice }: HotProductCardProps) {
  return (
    <div className="border-r border-b border-[#ededed] p-4 relative">
      <div className="flex justify-between items-start">
        <div className="bg-[#e8730b] text-white text-xs font-medium px-2 py-1">NEW</div>
        <button className="text-gray-400 hover:text-gray-600">
          <Heart size={20} />
        </button>
      </div>

      <div className="flex justify-center py-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={200}
          height={200}
          className="object-contain h-[180px]"
        />
      </div>

      <div className="mt-auto">
        <h3 className="font-medium mb-2">{title}</h3>
        <div className="text-gray-500 line-through text-sm">${originalPrice}</div>
        <div className="text-xl font-bold mt-1">${salePrice}</div>
      </div>
    </div>
  )
}
