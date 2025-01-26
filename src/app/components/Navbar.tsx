// components/Navbar.tsx
"use client";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1E2A47] to-[#34495E] text-white shadow-lg p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
        <div
  className="w-12 h-12 bg-[#34495E] rounded-full flex justify-center items-center"
  style={{
    backgroundImage: 'url(./logo.jpg)',
    backgroundSize: 'cover', // Ensures the image covers the entire circle
    backgroundPosition: 'center', // Centers the image within the circle
  }}
>
  {/* Optional: You can remove the <img> tag now */}
</div>
          <div className="text-2xl font-extrabold text-[#F7F8FA]">Admin Dashboard</div>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8">
          <Link
            href="/dashboard"
            className="hover:bg-[#2C3E56] hover:text-[#BDC3C7] px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Data View
          </Link>
          <Link
            href="/notifications"
            className="hover:bg-[#2C3E56] hover:text-[#BDC3C7] px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Notifications
          </Link>
          <Link
            href="/charts"
            className="hover:bg-[#2C3E56] hover:text-[#BDC3C7] px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Charts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
