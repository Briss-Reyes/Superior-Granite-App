"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "our products", path: "/products" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-[#fff]">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

        {/* Logo */}
        <div className="mt-32 mb-12 text-center text-2xl flex justify-center items-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src="/logo.png" width={120} height={120} alt="logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-8 font-bebas tracking-widest">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)} // Close menu on click
              className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                text-2xl text-black capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
