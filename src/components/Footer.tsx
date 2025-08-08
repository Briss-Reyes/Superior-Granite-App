// components/Footer.tsx
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-20 mt-30">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-accent transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-xl hover:text-accent transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-accent transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-accent transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 tracking-wide text-center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
