"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logo from "../../../public/logo.png";
import CommonWrapper from "@/components/shared/CommonWrapper";

const navLinkClass =
  "group relative inline-flex items-center py-2 text-base font-normal leading-[160%] text-[#F5F5F6] transition-colors duration-200 hover:text-[#D4FB20] after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#D4FB20] after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 20);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#003BE2]/85 backdrop-blur-sm"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <CommonWrapper>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" onClick={closeMenu} aria-label="Home" className="flex items-center">
            <Image
              src={logo}
              alt=""
              width={171}
              height={37}
              className="h-auto w-[min(171px,40vw)] object-contain"
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li><Link href="/" className={navLinkClass}>Home</Link></li>
              <li><Link href="/courses" className={navLinkClass}>Courses</Link></li>
              <li><Link href="/creator" className={navLinkClass}>Creator</Link></li>
            </ul>
          </div>

          <div className="hidden items-center gap-7 lg:flex">
            <Link href="/signin" className={navLinkClass}>Sign In</Link>
            <Link href="/signup" className={navLinkClass}>Join Us</Link>
            <Link href="/cart" className={navLinkClass} aria-label="Shopping bag">
              <Image src="/home/shopping.svg" alt="" width={24} height={24} className="h-6 w-6 shrink-0" />
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link href="/cart" className={navLinkClass} aria-label="Shopping bag">
              <Image src="/home/shopping.svg" alt="" width={24} height={24} className="h-6 w-6 shrink-0" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="p-2 text-[#F5F5F6] transition-colors hover:text-[#D4FB20]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </CommonWrapper>

      {menuOpen && (
        <div className="border-t border-white/10 bg-transparent py-4 lg:hidden">
          <CommonWrapper>
            <ul className="flex flex-col items-start gap-2">
              <li><Link href="/" onClick={closeMenu} className={navLinkClass}>Home</Link></li>
              <li><Link href="/courses" onClick={closeMenu} className={navLinkClass}>Courses</Link></li>
              <li><Link href="/creator" onClick={closeMenu} className={navLinkClass}>Creator</Link></li>
              <li><Link href="/signin" onClick={closeMenu} className={navLinkClass}>Sign In</Link></li>
              <li><Link href="/signup" onClick={closeMenu} className={navLinkClass}>Join Us</Link></li>
            </ul>
          </CommonWrapper>
        </div>
      )}
    </nav>
  );
}
