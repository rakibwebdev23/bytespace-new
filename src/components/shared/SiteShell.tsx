"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  if (isAuthPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1 pt-20">{children}</div>
      <Footer />
    </>
  );
}
