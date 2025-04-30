import { useState } from "react"; 
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" aria-label="Go to Home">
          <img
            src="https://www.tizzycloud.com/assets/tizzy_logo_new.png"
            alt="Tizzy"
            className="w-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/cloud-email">Tizzy Cloud Email</Link>
          <Link to="/cloud-hosting">Tizzy Cloud Hosting</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button
              className="cursor-pointer flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={mobileDropdownOpen ? "true" : "false"}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Managed Services <ChevronDown size={16} />
            </button>
            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 top-full mt-2 bg-white border rounded-md shadow-md w-48 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity z-50 ${
                mobileDropdownOpen ? "opacity-100 visible" : "opacity-0"
              }`}
            >
              <Link
                to="/managed/web"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web Management
              </Link>
              <Link
                to="/managed/security"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Security
              </Link>
              <Link
                to="/managed/database"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Database Support
              </Link>
            </div>
          </div>

          <Link to="/partner-with-us">Partner With Us</Link>
          <Link to="/sales/inquiry">Sales Inquiry</Link>
        </nav>

        {/* Account + Sign In + Cart - Hidden on Mobile */}
        <div className="hidden lg:flex justify-between items-center gap-5">
          <div className="relative group">
            <button className="cursor-pointer flex items-center bg-blue-500 text-white px-3 py-2 rounded-3xl text-sm font-medium">
              My account
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 bg-white border rounded-md shadow-md w-48 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity z-50 hidden group-hover:block">
              <Link
                to="/login/webmail"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Web mail login
              </Link>
              <Link
                to="/login/customer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Customer login
              </Link>
              <Link
                to="/login/reseller"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Reseller login
              </Link>
            </div>
          </div>
          <div>
            <Link to="/signin">Sign in</Link>
          </div>
          <div className="relative">
            <Link to="/cart" aria-label="Go to Cart">
              <FaShoppingCart />
              {/* Example Cart Badge */} 
            </Link>
          </div>
        </div>

        {/* Hamburger - Visible only on Mobile */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <Menu size={24} />
        </button>
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://www.tizzycloud.com/assets/tizzy_logo_new.png"
              alt="Tizzy"
              className="w-20"
            />
          </Link>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-3 text-gray-700 font-medium">
          <Link to="/cloud-email" onClick={() => setIsOpen(false)}>
            Tizzy Cloud Email
          </Link>
          <Link to="/cloud-hosting" onClick={() => setIsOpen(false)}>
            Tizzy Cloud Hosting
          </Link>

          {/* Collapsible Dropdown in Mobile */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Managed Services</span>
              <ChevronDown
                className={`transition-transform ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>

            {mobileDropdownOpen && (
              <div className="mt-1 ml-3 flex flex-col text-sm">
                <Link
                  to="/login/webmail"
                  className="py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Web Mail Login
                </Link>
                <Link
                  to="/login/customer"
                  className="py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Customer login
                </Link>
                <Link
                  to="/login/reseller"
                  className="py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Reseller login
                </Link>
              </div>
            )}
          </div>

          <Link to="/account" onClick={() => setIsOpen(false)}>
            My Account
          </Link>
          <Link to="/signin" onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </header>
  );
}
