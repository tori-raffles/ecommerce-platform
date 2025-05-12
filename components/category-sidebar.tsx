import {
  Laptop,
  Monitor,
  Smartphone,
  Gamepad2,
  Tv,
  Headphones,
  Refrigerator,
  Coffee,
  Wrench,
  DrillIcon as Drone,
  FlaskRoundIcon as Flask,
  UtensilsCrossed,
  Tag,
  Package,
} from "lucide-react"

export default function CategorySidebar() {
  const categories = [
    { name: "ALL PRODUCTS", icon: <Package className="w-5 h-5" /> },
    { name: "LAPTOPS", icon: <Laptop className="w-5 h-5" /> },
    { name: "COMPUTERS", icon: <Monitor className="w-5 h-5" /> },
    { name: "SMARTPHONES", icon: <Smartphone className="w-5 h-5" /> },
    { name: "GAMING PRODUCTS", icon: <Gamepad2 className="w-5 h-5" /> },
    { name: "TV & MONITORS", icon: <Tv className="w-5 h-5" /> },
    { name: "AUDIO PRODUCTS", icon: <Headphones className="w-5 h-5" /> },
    { name: "LARGE APPLIANCES", icon: <Refrigerator className="w-5 h-5" /> },
    { name: "SMALL APPLIANCES", icon: <Coffee className="w-5 h-5" /> },
    { name: "TOOLS", icon: <Wrench className="w-5 h-5" /> },
    { name: "DRONES", icon: <Drone className="w-5 h-5" /> },
    { name: "HOUSEHOLD CHEMICALS", icon: <Flask className="w-5 h-5" /> },
    { name: "DISHES", icon: <UtensilsCrossed className="w-5 h-5" /> },
    { name: "PROMOTIONAL PRODUCTS", icon: <Tag className="w-5 h-5" /> },
  ]

  return (
    <div className="w-[300px] border-r border-[#ededed] py-4">
      <ul className="space-y-1">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 text-[#717171]">
              {category.icon}
              <span className="text-sm">{category.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
