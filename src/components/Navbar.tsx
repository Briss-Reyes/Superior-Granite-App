"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "portfolio", path: "/portfolio" },
  { name: "blog", path: "/blog" },
  { name: "contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="container mx-auto py-6 px-4 2xl:px-0 flex justify-between items-center bg-background">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" width={60} height={60} alt="Logo" className="neon" />
        <span className="font-bold text-4xl hidden sm:inline font-bebas tracking-wide text-primary">Superior Granite</span>
      </Link>

      {/* Sheet (always used, all screen sizes) */}
      <Sheet>
        <SheetTrigger className="flex items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="p-8 w-full h-full md:max-w-full md:w-screen md:h-screen navbar-glass text-white flex flex-col justify-center items-start"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          {/* <div className="mt-20 mb-12 text-center flex justify-start px-20">
            <Link href="/">
              <Image src="/logo.png" width={170} height={170} alt="logo" className="neon" />
            </Link>
          </div> */}

          <nav className="flex flex-col justify-start items-start gap-8 tracking-widest px-20 font-bebas">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  link.path === pathname && "border-b-2 border-accent"
                } text-5xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
