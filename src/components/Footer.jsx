import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">

      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-3">CS — Ticket System</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A smart and efficient customer support platform designed to help
            teams track, manage, and resolve customer issues with ease. Stay
            on top of every ticket — from open to resolved — all in one place.
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
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
              @CS — Ticket System
            </li>
            <li className="cursor-pointer hover:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              @CS — Ticket System
            </li>
            <li className="cursor-pointer hover:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              @CS — Ticket System
            </li>
            <li className="cursor-pointer hover:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              support@cst.com
            </li>
          </ul>
        </div>

      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>

    </footer>
  );
}