import React from "react";

const Navbar = () => (
  <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">
              EaseUpload
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="text-gray-900">
              Features
            </a>
            <a href="#" className="text-gray-900">
              How It Works
            </a>
            <a href="#" className="text-gray-900">
              Testimonials
            </a>
            <a href="#" className="text-gray-900">
              FAQ
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-900">
            My Documents
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
