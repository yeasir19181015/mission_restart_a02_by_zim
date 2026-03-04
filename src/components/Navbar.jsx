import { toast } from "react-toastify";

export default function Navbar() {
  const handleNavClick = (item) => {
    toast.info(`${item} page coming soon!`);
  };

  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-900">
        CS — Ticket System
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm text-gray-600 font-medium">
          <li
            className="cursor-pointer hover:text-gray-900"
            onClick={() => handleNavClick("Home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-gray-900"
            onClick={() => handleNavClick("FAQ")}
          >
            FAQ
          </li>
          <li
            className="cursor-pointer hover:text-gray-900"
            onClick={() => handleNavClick("Changelog")}
          >
            Changelog
          </li>
          <li
            className="cursor-pointer hover:text-gray-900"
            onClick={() => handleNavClick("Blog")}
          >
            Blog
          </li>
          <li
            className="cursor-pointer hover:text-gray-900"
            onClick={() => handleNavClick("Download")}
          >
            Download
          </li>
          <li
            className="cursor-pointer hover:text-gray-900"
            onClick={() => handleNavClick("Contact")}
          >
            Contact
          </li>
        </ul>

        {/* New Ticket Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer"
         style={{
            background: "linear-gradient(135deg, #422AD5 0%, #7C3AED 100%)",
        }}
          onClick={() => handleNavClick("New Ticket")}
        >
          + New Ticket
        </button>
      </div>
    </nav>
  );
}