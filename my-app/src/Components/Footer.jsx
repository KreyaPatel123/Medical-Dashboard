import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">MediCare+</h2>
          <p className="mt-2 text-md">
            Your trusted health partner. Providing quality care with compassion and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Appointments</a></li>
            <li><a href="#" className="hover:text-blue-600">Doctors</a></li>
            <li><a href="#" className="hover:text-blue-600">Departments</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210 000</p>
            <p className="flex items-center gap-2"><FaEnvelope /> support@medicare.com</p>
          </div>
          <div className="flex space-x-4 mt-4 text-blue-600">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MediCare+. All rights reserved.
      </div>
    </footer>
  );
}
