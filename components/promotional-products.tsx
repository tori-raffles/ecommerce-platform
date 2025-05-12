import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PromotionalProducts() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">PROMOTIONAL PRODUCTS</h2>
          <span className="text-2xl text-gray-400 ml-2">+46</span>
        </div>
        <div className="flex items-center">
          <button className="bg-black text-white px-3 py-1.5 text-sm font-medium h-9">SEE ALL</button>
          <div className="flex ml-2">
            <button className="bg-gray-200 h-9 w-9 flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button className="bg-gray-200 h-9 w-9 flex items-center justify-center border-l border-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Left section - Featured product */}
        <div className="col-span-2 bg-[#f9f9f9] rounded-lg p-6 relative">
          <div className="flex">
            {/* Left content */}
            <div className="flex-1 pl-2">
              {/* Badge and product name on the same line */}
              <div className="flex items-center justify-between mb-2">
                <div className="inline-block bg-[#bb2a54] text-white text-xs font-medium px-2 py-0.5 rounded">
                  BEST-SELLER
                </div>
                <h3 className="text-base font-medium">NIKON JK 453 CCD</h3>
              </div>

              {/* Headline */}
              <h2 className="text-4xl font-bold mt-6 mb-6">
                YOU WILL FIND THE
                <br />
                BEST PRICE HERE!
              </h2>

              {/* Discount and prices */}
              <div className="flex items-start">
                <div className="text-7xl font-bold">25</div>
                <div className="text-3xl font-bold mt-2 ml-1">% Off</div>
              </div>

              <div className="mt-1">
                <div className="text-gray-500 line-through text-lg">$1333</div>
                <div className="text-4xl font-bold">$1046</div>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 pr-2 flex flex-col justify-center">
              {/* Timer and image container */}
              <div>
                {/* Timer - centered horizontally */}
                <div className="flex justify-center space-x-1 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 text-center mb-0.5">DAYS</div>
                    <div className="bg-white border border-gray-200 w-12 h-12 flex items-center justify-center text-base font-bold">
                      05
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-lg font-bold">:</div>
                  <div>
                    <div className="text-xs text-gray-500 text-center mb-0.5">HOURS</div>
                    <div className="bg-white border border-gray-200 w-12 h-12 flex items-center justify-center text-base font-bold">
                      16
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-lg font-bold">:</div>
                  <div>
                    <div className="text-xs text-gray-500 text-center mb-0.5">MIN</div>
                    <div className="bg-white border border-gray-200 w-12 h-12 flex items-center justify-center text-base font-bold">
                      52
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-lg font-bold">:</div>
                  <div>
                    <div className="text-xs text-gray-500 text-center mb-0.5">SEC</div>
                    <div className="bg-white border border-gray-200 w-12 h-12 flex items-center justify-center text-base font-bold">
                      24
                    </div>
                  </div>
                </div>

                {/* Product image */}
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/nikon-camera.png"
                    alt="Nikon JK 453 CCD"
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Side products */}
        <div className="space-y-2">
          {/* Drone */}
          <div className="bg-[#f9f9f9] rounded-lg p-3 relative">
            <div className="absolute top-0 left-0">
              <div className="bg-[#bb2a54] text-white text-xs font-medium px-2 py-1">- 15%</div>
            </div>

            <div className="flex justify-center items-center h-[140px] mt-3">
              <Image src="/images/drone.png" alt="Drone TB 3" width={140} height={140} className="object-contain" />
            </div>

            <div className="mt-1">
              <div className="text-gray-500 line-through text-xs">$1555</div>
              <div className="flex justify-between items-baseline">
                <div className="text-xl font-bold">$1222</div>
                <div className="text-sm font-medium">DRONE TB 3</div>
              </div>
            </div>
          </div>

          {/* Samsung */}
          <div className="bg-[#f9f9f9] rounded-lg p-3 relative">
            <div className="absolute top-0 left-0">
              <div className="bg-[#bb2a54] text-white text-xs font-medium px-2 py-1">- 25%</div>
            </div>

            <div className="flex justify-center items-center h-[140px] mt-3">
              <Image
                src="/images/laptop.png"
                alt="Samsung A55 5G"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>

            <div className="mt-1">
              <div className="text-gray-500 line-through text-xs">$1520</div>
              <div className="flex justify-between items-baseline">
                <div className="text-xl font-bold">$1322</div>
                <div className="text-sm font-medium">SAMSUNG A55 5G</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom products */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        {/* Panasonic */}
        <div className="bg-[#f9f9f9] rounded-lg p-3 relative">
          <div className="absolute top-0 left-0">
            <div className="bg-[#bb2a54] text-white text-xs font-medium px-2 py-1">- 15%</div>
          </div>

          <div className="flex justify-center items-center h-[140px] mt-3">
            <Image
              src="/images/panasonic-video-camera.png"
              alt="Panasonic DS 500 H"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          <div className="mt-1">
            <div className="text-gray-500 line-through text-xs">$1499</div>
            <div className="flex justify-between items-baseline">
              <div className="text-xl font-bold">$1244</div>
              <div className="text-sm font-medium">PANASONIC DS 500 H</div>
            </div>
          </div>
        </div>

        {/* MI */}
        <div className="bg-[#f9f9f9] rounded-lg p-3 relative">
          <div className="absolute top-0 left-0">
            <div className="bg-[#bb2a54] text-white text-xs font-medium px-2 py-1">- 10%</div>
          </div>

          <div className="flex justify-center items-center h-[140px] mt-3">
            <Image
              src="/images/laptop-cooling-pad.png"
              alt="MI 433 BT"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          <div className="mt-1">
            <div className="text-gray-500 line-through text-xs">$1004</div>
            <div className="flex justify-between items-baseline">
              <div className="text-xl font-bold">$888</div>
              <div className="text-sm font-medium">MI 433 BT</div>
            </div>
          </div>
        </div>

        {/* Casio */}
        <div className="bg-[#f9f9f9] rounded-lg p-3 relative">
          <div className="absolute top-0 left-0">
            <div className="bg-[#bb2a54] text-white text-xs font-medium px-2 py-1">- 20%</div>
          </div>

          <div className="flex justify-center items-center h-[140px] mt-3">
            <Image
              src="/images/smartwatch.png"
              alt="Casio 105 BG2"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          <div className="mt-1">
            <div className="text-gray-500 line-through text-xs">$1499</div>
            <div className="flex justify-between items-baseline">
              <div className="text-xl font-bold">$1099</div>
              <div className="text-sm font-medium">CASIO 105 BG2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
