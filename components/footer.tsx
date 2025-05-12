import { StarIcon, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Platform Logo and Name */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-[#cdff3a] p-2 flex items-center justify-center h-[50px] w-[50px]">
                <StarIcon className="text-black h-6 w-6" />
              </div>
              <div className="ml-3">
                <span className="font-bold text-xl">PLATFORM NAME</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-xs mt-4">
              Your trusted destination for the latest in tech and electronics.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Sell Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Sell</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Forums
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Settings
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-span-2">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Platform Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
