import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

export default function PopularAccessories() {
  const accessories = [
    {
      id: 1,
      name: "SAMSUNG A55 5G",
      image: "/images/bluetooth-headset.png",
      price: 1099,
      originalPrice: 1499,
      discount: 10,
    },
    {
      id: 2,
      name: "CASIO JH202 F",
      image: "/images/smartwatch.png",
      price: 1244,
      originalPrice: null,
      discount: null,
    },
    {
      id: 3,
      name: "BGF",
      image: "/images/laptop-sleeve.png",
      price: 88,
      originalPrice: null,
      discount: null,
    },
    {
      id: 4,
      name: "SONY J2 YT",
      image: "/images/sony-walkman.png",
      price: 1099,
      originalPrice: 1499,
      discount: 15,
    },
    {
      id: 5,
      name: "TOP 52 G",
      image: "/images/phone-case.png",
      price: 44,
      originalPrice: null,
      discount: null,
    },
  ]

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">POPULAR ACCESSORIES</h2>
          <span className="text-2xl text-gray-400 ml-2">+244</span>
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
        {accessories.map((accessory) => (
          <div key={accessory.id} className="border-r border-b border-[#ededed] p-4 relative">
            <div className="flex justify-end">
              <button className="text-gray-400 hover:text-gray-600">
                <Heart size={20} />
              </button>
            </div>

            {accessory.discount && (
              <div className={`absolute top-4 left-4 bg-[#00af98] text-white text-xs font-medium px-2 py-1`}>
                -{accessory.discount}%
              </div>
            )}

            <div className="flex justify-center py-6">
              <Image
                src={accessory.image || "/placeholder.svg"}
                alt={accessory.name}
                width={200}
                height={200}
                className="object-contain h-[180px]"
              />
            </div>

            <div className="mt-auto">
              <h3 className="font-medium mb-2">{accessory.name}</h3>
              {accessory.originalPrice ? (
                <div className="text-gray-500 line-through text-sm">${accessory.originalPrice}</div>
              ) : null}
              <div className="text-xl font-bold mt-1">${accessory.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
