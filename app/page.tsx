import Image from "next/image"
import { Mic, StarIcon, Bell, ShoppingCart, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import HotProductCard from "@/components/hot-product-card"
import PromotionalProducts from "@/components/promotional-products"
import PopularProducts from "@/components/popular-products"
import PopularAccessories from "@/components/popular-accessories"
import Footer from "@/components/footer"

export default function Home() {
  const hotProducts = [
    {
      id: 1,
      name: "SAMSUNG A55 5G",
      image: "/images/samsung-a55.png",
      originalPrice: 1499,
      salePrice: 1099,
    },
    {
      id: 2,
      name: "SAMSUNG JH202 F",
      image: "/images/samsung-jh202.png",
      originalPrice: 1699,
      salePrice: 1244,
    },
    {
      id: 3,
      name: "LG 777 BGF 2",
      image: "/images/lg-777.png",
      originalPrice: 2055,
      salePrice: 1688,
    },
    {
      id: 4,
      name: "MI LKJ2 YT",
      image: "/images/mi-lkj2.png",
      originalPrice: 1499,
      salePrice: 1099,
    },
    {
      id: 5,
      name: "LG 147 HGT",
      image: "/images/lg-147.png",
      originalPrice: 1544,
      salePrice: 1188,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-[#ededed]">
        {/* Top navbar */}
        <div className="flex items-center w-full">
          {/* Logo section */}
          <div className="flex items-center">
            <div className="bg-[#cdff3a] p-2 flex items-center justify-center h-[60px] w-[60px]">
              <StarIcon className="text-black h-6 w-6" />
            </div>
            <div className="bg-black h-[60px] flex items-center px-6">
              <span className="text-white font-bold">PLATFORM NAME</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex items-center px-4">
            <div className="relative flex-1 max-w-3xl">
              <input
                type="text"
                className="w-full border border-[#d9d9d9] rounded-md py-2 px-4 pr-10"
                placeholder="Search"
              />
              <Mic className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button className="ml-2 bg-[#cdff3a] text-black px-4 py-2 rounded-md flex items-center font-medium">
              SEARCH <ArrowRight className="ml-1" size={16} />
            </button>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4 px-6">
            <div className="flex items-center gap-1">
              <span>ENG</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-[#cdff3a] text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#cdff3a] text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Company Info Section */}
      <div className="py-5 px-4 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-start justify-between">
            {/* Left - Company Info */}
            <div className="flex gap-4">
              <div className="p-0">
                <Image
                  src="/images/company-logo.png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-[#717171] w-32">BUSINESS NAME:</span>
                  <span className="font-bold">COMPANY NAME</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#717171] w-32">LOCATION:</span>
                  <span>TEXAS, USA</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#717171] w-32 shrink-0">DESCRIPTION:</span>
                  <span className="max-w-[280px] text-xs leading-tight">
                    Welcome to our electronics store — your trusted destination for the latest in tech! We specialize in
                    mobile phones, laptops, desktop computers, tablets, accessories, and more. Whether you're upgrading
                    your smartphone, building a custom PC, or searching for reliable office equipment, we've got you
                    covered.
                  </span>
                </div>
              </div>
            </div>

            {/* Middle - Business Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-[#717171] w-32">BUSINESS RATING:</span>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">4.8 FROM 135 REVIEWS</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[#717171] w-32">NUMBER OF SALES:</span>
                <span className="font-medium">3,757</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#717171] w-32 shrink-0">BUSINESS TYPE:</span>
                <div className="flex flex-wrap gap-2 max-w-[300px]">
                  <span className="bg-[#e2deff] text-[#5a4fcf] px-3 py-1 text-xs rounded">MARKETPLACE</span>
                  <span className="bg-[#e2deff] text-[#5a4fcf] px-3 py-1 text-xs rounded">ONLINE STORE</span>
                  <span className="bg-[#e2deff] text-[#5a4fcf] px-3 py-1 text-xs rounded">SHOPPING</span>
                  <span className="bg-[#e2deff] text-[#5a4fcf] px-3 py-1 text-xs rounded">SERVICES</span>
                  <span className="bg-[#e2deff] text-[#5a4fcf] px-3 py-1 text-xs rounded">ELECTRONICS</span>
                  <span className="bg-[#e2deff] text-[#5a4fcf] px-3 py-1 text-xs rounded">HOUSEHOLD APPLIANCES</span>
                </div>
              </div>
            </div>

            {/* Right - Contact */}
            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center mb-2">
                <Image
                  src="/images/company-logo.png"
                  alt="Company Logo"
                  width={20}
                  height={20}
                  className="h-5 w-5 mr-1"
                />
                <span className="font-bold text-sm">COMPANY NAME</span>
              </div>
              <button className="bg-black text-white px-3 py-1.5 text-xs">CONTACT THE STORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Moved below the entire company info section */}
      <div className="bg-[#F9F9F9] border-b border-[#ededed] mb-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between border-t border-[#ededed]">
            <div className="flex">
              <a href="#" className="px-5 py-2 font-bold text-sm border-b-2 border-black">
                PRODUCTS
              </a>
              <a href="#" className="px-5 py-2 text-[#717171] text-sm border-l border-r border-[#ededed]">
                SERVICES
              </a>
              <a href="#" className="px-5 py-2 text-[#717171] text-sm border-r border-[#ededed]">
                ABOUT US
              </a>
            </div>
            <div className="flex">
              <button className="p-2 border-l border-[#ededed]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="p-2 border-l border-[#ededed]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 max-w-[1400px] mx-auto w-full bg-white">
        {/* Sidebar */}
        <CategorySidebar />

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Hero banner */}
          <div
            className="rounded-lg px-[120px] py-[50px] mb-6 flex relative overflow-hidden items-center justify-center"
            style={{
              backgroundImage: `url('/images/banner-bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-1 z-10">
              <div className="inline-block bg-[#9283ff] text-white text-xs font-medium px-3 py-1 rounded mb-4">
                BEST PRICE
              </div>
              <div className="text-black mt-4">
                <h2 className="text-sm font-medium mb-2">VIVO · PRO GTX 20-U</h2>
                <h1 className="text-4xl font-bold mt-4 mb-2">
                  FROM THE COVERS
                  <br />
                  TO YOUR POCKET!
                </h1>
                <div className="flex items-center mt-8">
                  <div className="text-7xl font-bold">40</div>
                  <div className="ml-2">
                    <div className="text-3xl font-bold">% Off</div>
                    <div className="flex items-center mt-4">
                      <ArrowRight className="text-gray-500 mr-4" />
                      <div className="text-gray-500 line-through">$1284</div>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="text-gray-500 mr-4" />
                      <div className="text-2xl font-bold">$1044</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center z-10">
              <Image
                src="/images/vivo-phone.png"
                alt="VIVO PRO GTX 20-U"
                width={300}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <ProductCard
              image="/images/laptop.png"
              title="SAMSUNG A55 5G"
              originalPrice={1499}
              salePrice={1099}
              discount={15}
              discountColor="#e8730b"
              backgroundImage="/images/banner-bg.png"
            />
            <ProductCard
              image="/images/tablet.png"
              title="ACER 477 JHG"
              originalPrice={1244}
              salePrice={999}
              discount={20}
              discountColor="#02ba39"
              backgroundImage="/images/banner-bg.png"
            />
            <ProductCard
              image="/images/headphones.png"
              title="LG ZW-200"
              originalPrice={210}
              salePrice={189}
              discount={10}
              discountColor="#00af98"
              backgroundImage="/images/banner-bg.png"
            />
          </div>

          {/* Hot New Products Section */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">HOT NEW PRODUCTS</h2>
                <span className="text-2xl text-gray-400 ml-2">+88</span>
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
              {hotProducts.map((product) => (
                <HotProductCard
                  key={product.id}
                  image={product.image}
                  title={product.name}
                  originalPrice={product.originalPrice}
                  salePrice={product.salePrice}
                />
              ))}
            </div>
          </div>

          {/* Promotional Products Section */}
          <PromotionalProducts />

          {/* Popular Products Section */}
          <PopularProducts />

          {/* Popular Accessories Section */}
          <PopularAccessories />

          {/* Explore More Products Button */}
          <div className="flex justify-center mb-8 mt-12">
            <button className="bg-black text-white px-6 py-3 flex items-center font-medium">
              EXPLORE MORE PRODUCTS
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              <button className="h-10 w-10 flex items-center justify-center bg-gray-200 mr-1">
                <ChevronLeft size={20} />
              </button>
              <button className="h-10 w-10 flex items-center justify-center bg-black text-white">1</button>
              <button className="h-10 w-10 flex items-center justify-center bg-gray-200">2</button>
              <button className="h-10 w-10 flex items-center justify-center bg-gray-200">3</button>
              <button className="h-10 w-10 flex items-center justify-center bg-gray-200">...</button>
              <button className="h-10 w-10 flex items-center justify-center bg-gray-200">8</button>
              <button className="h-10 w-10 flex items-center justify-center bg-gray-200 ml-1">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
