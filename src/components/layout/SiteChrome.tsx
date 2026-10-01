"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface SiteChromeProps {
  children: ReactNode;
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/signin" || pathname === "/signup";

  if (isAuthRoute) return children;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
