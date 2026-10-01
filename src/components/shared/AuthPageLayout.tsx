import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonWrapper from "@/components/shared/CommonWrapper";
import CourseCard from "@/components/shared/CourseCard";
import figmaCourse from "@/data/courses/course-2";
import figmaCourse2 from "@/data/courses/course-3";
import { Star } from "lucide-react";
import AnimatedTooltip from "@/features/home/components/AnimatedTooltip";
import { happyStudentsData } from "@/data/happyStudentsData";
import circleImage from "../../../public/auth-circle.png";
import coneImage from "../../../public/auth-cone.png";
import maskImage from "../../../public/auth-mask.png";

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
      className="h-fit min-h-screen overflow-x-clip bg-cover bg-center bg-no-repeat pb-10 sm:pb-12 lg:pb-[120px]"
      style={{ backgroundImage: "url('/register-back.png')" }}
    >
      <CommonWrapper className="flex flex-col">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="inline-flex w-fit pb-6 pt-6 sm:pb-8 sm:pt-8 lg:pb-14"
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

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,579px)] lg:gap-x-12 lg:gap-y-[53px] xl:gap-x-16">
          <div className="w-full max-w-[475px] text-left">
            <h1 className="font-[Poppins] text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#F5F5F6]">
              {title}
            </h1>
            <p className="mt-3 w-full font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#F5F5F6] sm:mt-4 sm:text-[18px]">
              {description}
            </p>
          </div>

          <div className="w-full rounded-3xl bg-white p-5 shadow-xl shadow-blue-950/15 sm:p-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:px-[63px] lg:pb-10 lg:pt-[63px]">
            {children}
          </div>

          <div className="w-full lg:max-w-[528px]">
            <div className="relative mx-auto aspect-[692/697] w-full max-w-[692px] lg:mx-0 xl:-ml-[16.7%] xl:w-[116.7%] xl:max-w-none">
              <CourseCard
                course={figmaCourse}
                staticCard
                imageHeightClass="h-[50.5%]"
                className="absolute left-[14.3%] top-[19.7%] z-10 h-[61.7%] w-[60.5%]"
              />

              <CourseCard
                course={figmaCourse2}
                staticCard
                imageHeightClass="h-[50.5%]"
                className="absolute left-[32.4%] top-[5.3%] z-20 h-[61.7%] w-[60.5%]"
              />

              <Image
                src={circleImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[22.5%] top-[11.8%] z-30 h-auto w-[14%] object-contain"
              />

              <Image
                src={coneImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[14.3%] top-[72.7%] z-30 h-auto w-[20.5%] object-contain"
              />

              <Image
                src={maskImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[76.3%] top-[61.7%] z-30 h-auto w-[18.5%] object-contain"
              />

              <div className="absolute left-[46%] top-[75.5%] z-40 w-[47%] rounded-xl bg-[#D4FB20] p-[2.8%] text-left sm:rounded-2xl">
                <h2 className="font-[Satoshi] text-[clamp(12px,2.6vw,18px)] font-medium leading-[1.2] text-[#242528]">
                  Happy Students
                </h2>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[10px] font-medium leading-[1.6] text-[#242528] sm:text-[12px]">
                    4.5{" "}
                    <span className="font-normal text-[#242528]/70">(240)</span>
                  </span>
                  <Star
                    aria-hidden="true"
                    className="h-3 w-3 fill-[#1D3BF2] text-[#1D3BF2] sm:h-[14px] sm:w-[14px]"
                  />
                </div>
                <div className="mt-1.5 max-w-full overflow-visible sm:mt-2">
                  <AnimatedTooltip items={happyStudentsData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
}