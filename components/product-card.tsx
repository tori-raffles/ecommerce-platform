import Image from "next/image"

interface ProductCardProps {
  image: string
  title: string
  originalPrice: number
  salePrice: number
  discount: number
  discountColor: string
  backgroundImage?: string
}

export default function ProductCard({
  image,
  title,
  originalPrice,
  salePrice,
  discount,
  discountColor,
  backgroundImage,
}: ProductCardProps) {
  return (
    <div
      className="rounded-lg p-4 flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "linear-gradient(to right, #f0f0ff, #f5f0ff)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 text-white text-xs font-medium px-2 py-1 rounded"
          style={{ backgroundColor: discountColor }}
        >
          - {discount}%
        </div>
        <div className="flex justify-center py-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={200}
            height={150}
            className="object-contain h-[150px]"
          />
        </div>
      </div>
      <div className="mt-auto z-10">
        <div className="text-gray-500 line-through text-sm">${originalPrice}</div>
        <div className="flex justify-between items-center mt-1">
          <div className="text-xl font-bold">${salePrice}</div>
          <div className="text-sm font-medium">{title}</div>
        </div>
      </div>
    </div>
  )
}
