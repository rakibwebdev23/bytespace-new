import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonWrapper from "@/components/shared/CommonWrapper";

interface AuthPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthPageLayout({
  title,
  description,
  children,
}: AuthPageLayoutProps) {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat h-fit pb-12"
      style={{ backgroundImage: "url('/register-back.png')" }}
    >
      <CommonWrapper className="flex min-h-[calc(100vh-4rem)] flex-col sm:justify-center">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="inline-flex w-fit py-6 md:py-12"
        >
          <Image
            src="/logo-icon.svg"
            alt="ByteSpace"
            width={29}
            height={32}
            priority
            className="block h-[31.5px] w-[28.875px]"
          />
        </Link>

        <div className="grid flex-1 grid-cols-1 items-start gap-8 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(380px,573px)] lg:gap-16 lg:py-0">
          <div className="w-full max-w-[475px] text-left">
            <h1 className="font-[Poppins] text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#F5F5F6]">
              {title}
            </h1>
            <p className="mt-4 w-full font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#F5F5F6]">
              {description}
            </p>
          </div>

          <div className="w-full rounded-3xl bg-white p-6 shadow-xl shadow-blue-950/15 sm:p-10 lg:p-[60px]">
            {children}
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
}
