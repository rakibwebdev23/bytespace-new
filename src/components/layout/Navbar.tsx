"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logo from "../../../public/logo.png";
import CommonWrapper from "@/components/shared/CommonWrapper";

const navLinkClass =
  "group relative inline-flex items-center py-2 text-base font-normal leading-[160%] text-[#F5F5F6] transition-colors duration-200 hover:text-[#D4FB20] after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#D4FB20] after:transition-transform after:duration-300 hover:after:scale-x-100";

const mobileLinkClass =
  "flex min-h-12 w-full items-center border-b border-white/10 py-3 text-base font-normal text-[#F5F5F6] transition-colors duration-200 hover:text-[#D4FB20] active:text-[#D4FB20]";

const iconLinkClass =
  "inline-flex h-11 w-11 items-center justify-center text-[#F5F5F6] transition-colors duration-200 hover:text-[#D4FB20]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 20);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled || menuOpen
          ? "bg-[#003BE2] shadow-md sm:bg-[#003BE2]/90 sm:backdrop-blur-sm"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <CommonWrapper>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Home"
            className="flex shrink-0 items-center"
          >
            <Image
              src={logo}
              alt=""
              width={171}
              height={37}
              priority
              className="h-auto w-[130px] object-contain sm:w-[150px] lg:w-[171px]"
            />
          </Link>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li><Link href="/" className={navLinkClass}>Home</Link></li>
              <li><Link href="/courses" className={navLinkClass}>Courses</Link></li>
              <li><Link href="/creator" className={navLinkClass}>Creator</Link></li>
            </ul>
          </div>

          {/* desktop actions */}
          <div className="hidden items-center gap-7 lg:flex">
            <Link href="/signin" className={navLinkClass}>Sign In</Link>
            <Link href="/signup" className={navLinkClass}>Join Us</Link>
            <Link href="/cart" className={navLinkClass} aria-label="Shopping bag">
              <Image
                src="/home/shopping.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0"
              />
            </Link>
          </div>

          {/* mobile / tablet actions */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <Link
              href="/cart"
              onClick={closeMenu}
              className={iconLinkClass}
              aria-label="Shopping bag"
            >
              <Image
                src="/home/shopping.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={iconLinkClass}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </CommonWrapper>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 pb-6 pt-2 sm:max-h-[calc(100dvh-5rem)]">
            <CommonWrapper>
              <ul className="flex flex-col">
                <li><Link href="/" onClick={closeMenu} className={mobileLinkClass}>Home</Link></li>
                <li><Link href="/courses" onClick={closeMenu} className={mobileLinkClass}>Courses</Link></li>
                <li><Link href="/creator" onClick={closeMenu} className={mobileLinkClass}>Creator</Link></li>
              </ul>

              <div className="mt-5 flex flex-col gap-3 min-[480px]:flex-row">
                <Link
                  href="/signin"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-3xl border border-white/40 px-6 py-3 text-base font-medium text-[#F5F5F6] transition-colors hover:border-[#D4FB20] hover:text-[#D4FB20]"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-3xl bg-[#D4FB20] px-6 py-3 text-base font-medium text-[#242528] transition-colors hover:bg-[#c4eb12]"
                >
                  Join Us
                </Link>
              </div>
            </CommonWrapper>
          </div>
        </div>
      </div>
    </nav>
  );
}

