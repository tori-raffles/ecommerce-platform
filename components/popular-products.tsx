import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

export default function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "SAMSUNG A55 5G",
      image: "/images/hp-laptop.png",
      price: 1099,
      discount: null,
    },
    {
      id: 2,
      name: "SAMSUNG JH202 F",
      image: "/images/purple-samsung.png",
      price: 1244,
      originalPrice: 1699,
      discount: 5,
    },
    {
      id: 3,
      name: "LG 777 BGF 2",
      image: "/images/wacom-tablet.png",
      price: 1688,
      discount: null,
    },
    {
      id: 4,
      name: "MI LKJ2 YT",
      image: "/images/iphone.png",
      price: 1099,
      discount: null,
    },
    {
      id: 5,
      name: "LG 147 HGT",
      image: "/images/gold-samsung.png",
      price: 1188,
      originalPrice: 1544,
      discount: 10,
    },
  ]

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">POPULAR PRODUCTS</h2>
          <span className="text-2xl text-gray-400 ml-2">+102</span>
        </div>
        <div className="flex items-center">
          <button className="bg-black text-white px-4 py-2 text-sm font-medium h-10">SEE ALL</button>
          <div className="flex ml-2">
            <button className="bg-gray-200 h-10 w-10 flex items-center justify-center">
              <ChevronLeft size={20} />
            </button>
            <button className="bg-gray-200 h-10 w-10 flex items-center justify-center border-l border-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-0">
        {products.map((product) => (
          <div key={product.id} className="border-r border-b border-[#ededed] p-4 relative">
            <div className="flex justify-end">
              <button className="text-gray-400 hover:text-gray-600">
                <Heart size={20} />
              </button>
            </div>

            {product.discount && (
              <div className={`absolute top-4 left-4 bg-[#9283ff] text-white text-xs font-medium px-2 py-1`}>
                -{product.discount}%
              </div>
            )}

            <div className="flex justify-center py-6">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain h-[180px]"
              />
            </div>

            <div className="mt-auto">
              <h3 className="font-medium mb-2">{product.name}</h3>
              {product.originalPrice ? (
                <div className="text-gray-500 line-through text-sm">${product.originalPrice}</div>
              ) : null}
              <div className="text-xl font-bold mt-1">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
