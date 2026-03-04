export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-8">
      {/* Top Section */}
      <div className="flex gap-12 mb-10">
        {/* Brand */}
        <div className="w-64">
          <h2 className="text-xl font-bold mb-3">CS — Ticket System</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Our Mission</li>
            <li className="cursor-pointer hover:text-white">Contact Saled</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">Products & Services</li>
            <li className="cursor-pointer hover:text-white">Customer Stories</li>
            <li className="cursor-pointer hover:text-white">Download Apps</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-white">Join Us</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Social Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">
              𝕏 @CS — Ticket System
            </li>
            <li className="cursor-pointer hover:text-white">
              in @CS — Ticket System
            </li>
            <li className="cursor-pointer hover:text-white">
              f @CS — Ticket System
            </li>
            <li className="cursor-pointer hover:text-white">
              ✉ support@cst.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}