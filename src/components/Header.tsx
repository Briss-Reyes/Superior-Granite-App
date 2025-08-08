"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger scroll shrink after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "navbar-glass shadow-md py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 2xl:px-0 transition-all duration-300">
        {/* LOGO */}
        <Link href="/" className="flex justify-center items-center gap-2 transition-all duration-300">
          <Image
            src="/logo.png"
            width={scrolled ? 50 : 80}
            height={scrolled ? 50 : 80}
            alt="logo"
            className="transition-all duration-300"
          />
        </Link>

        {/* DESKTOP NAV SYSTEM */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* MOBILE NAV SYSTEM */}
        <div className="xl:hidden flex items-center gap-4">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
