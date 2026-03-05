import { useState } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (item) => {
    toast.info(`${item} page coming soon!`);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          CS — Ticket System
        </div>

        {/* Hamburger Button - only mobile */}
        <button
          className="md:hidden text-gray-700 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm text-gray-600 font-medium">
            {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-gray-900"
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #422AD5, #7C3AED)",
            }}
            onClick={() => handleNavClick("New Ticket")}
          >
            + New Ticket
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-sm text-gray-600 font-medium">
          {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-gray-900 py-1 border-b border-gray-100"
                onClick={() => handleNavClick(item)}
              >
                {item}
              </li>
            )
          )}
        </ul>
        <button
          className="w-full py-2 rounded-lg text-white text-sm font-semibold cursor-pointer  mt-2"
          style={{
            background: "linear-gradient(135deg, #422AD5, #7C3AED)",
          }}
          onClick={() => handleNavClick("New Ticket")}
        >
          + New Ticket
        </button>
      </div>
    </nav>
  );
}