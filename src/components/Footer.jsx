import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <hr className="py-4 border-gray-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="md:w-1/3">
          <div className="mb-4">
            <img
              src="https://www.tizzycloud.com/assets/tizzy_logo_new.png"
              alt="Tizzy Logo"
              className="h-8"
            />
          </div>
          <p className="text-gray-400 text-sm">
            Tizzy Cloud is a team of enthusiastic techies specialized in Cloud
            Computing services. Since inception we are focused on educating
            rather just selling services.
          </p>
          <div className="flex space-x-4 mt-4">
            <img
              src="https://www.tizzycloud.com/assets/img/iso.png"
              alt="ISO"
              className="h-12"
            />
            <img
              src="https://www.tizzycloud.com/assets/img/back.png"
              alt="Money Back"
              className="h-12"
            />
            <img
              src="https://www.tizzycloud.com/assets/img/free.png"
              alt="Free Trial"
              className="h-12"
            />
          </div>
        </div>

        {/* Middle Links */}
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-semibold text-white mb-2">Company</p>
            <ul className="space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">
                About Tizzy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Media</li>
              <li className="hover:text-blue-600 cursor-pointer">Legal</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Products</p>
            <ul className="space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">Tizzy Mail</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Tizzy Cloud
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Google Workspace
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Microsoft 365
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Support</p>
            <ul className="space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Migration</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Backup & Restore
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Career</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 text-center pb-6">
        <div className="flex justify-center space-x-4 text-blue-400 text-lg">
          <FaInstagram className="hover:text-white transition cursor-pointer" />
          <FaFacebookF className="hover:text-white transition cursor-pointer" />
          <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
          <FaTwitter className="hover:text-white transition cursor-pointer" />
          <FaGoogle className="hover:text-white transition cursor-pointer" />
          <FaWhatsapp className="hover:text-white transition cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
