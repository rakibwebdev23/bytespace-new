import { Check, Star } from "lucide-react";
import Image from "next/image";
import manageCourses from "../../../../public/home/professional-growth/manage-courses.png";
import maskImage2 from "../../../../public/home/professional-growth/mask-2.png";
import AnimatedTooltip from "./AnimatedTooltip";
import { happyStudentsData } from "@/data/happyStudentsData";

const courseBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ManageCourses() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-10">
      <div className="relative order-1 w-full sm:aspect-[577/540] lg:min-w-0 lg:flex-1 lg:basis-0">
        <Image
          src={manageCourses}
          alt="A student working on a laptop"
          width={436}
          height={596}
          priority
          className="relative z-20 h-[340px] w-full object-cover sm:absolute sm:inset-auto sm:left-8 sm:top-0 sm:h-[596px] sm:w-[436px]"
        />

        <Image
          src={maskImage2}
          alt=""
          width={216}
          height={216}
          className="pointer-events-none absolute left-[45%] top-[8%] z-40 hidden h-auto w-[20%] object-contain sm:block sm:top-[14%] sm:w-[27.6%]"
        />

        <div className="flex w-full flex-col gap-3 sm:contents">
          <div className="relative z-30 md:z-10 inline-flex w-full flex-col items-start gap-1.5 rounded-2xl bg-[#003BE2] p-3 py-5 pt-7 backdrop-blur-[10px] sm:gap-2 sm:p-4 md:absolute md:left-0 md:top-[6%] md:mt-0 md:w-fit">
            <h3 className="font-[Satoshi] text-sm font-medium leading-[1.2] text-[#F5F5F6] sm:text-base">
              Total Revenue
            </h3>
            <p className="font-[Satoshi] text-[10px] font-normal leading-[1.2] text-[#F5F5F6]">
              July 1-28
            </p>
            <p className="font-[Poppins] text-xl font-semibold leading-7 tracking-[-0.24px] text-[#F5F5F6] sm:text-2xl sm:leading-8">
              $120.29
            </p>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-white/20 sm:w-[min(200px,calc(100vw-5rem))]"
              role="progressbar"
              aria-label="Total revenue progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={55}
            >
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>

          <div className="relative z-30 md:z-10 inline-flex w-full flex-col items-start gap-1.5 rounded-2xl bg-[#003BE2] p-3 backdrop-blur-[10px] sm:gap-2 sm:p-4 md:absolute md:left-0 md:top-[32%] md:mt-0 md:w-fit">
            <h3 className="font-[Satoshi] text-sm font-medium leading-[1.2] text-[#F5F5F6] sm:text-base">
              Year to Date
            </h3>
            <p className="font-[Satoshi] text-[10px] font-normal leading-[1.2] text-[#F5F5F6]">
              2023
            </p>
            <p className="font-[Poppins] text-xl font-semibold leading-7 tracking-[-0.24px] text-[#F5F5F6] sm:text-2xl sm:leading-8">
              $1,200.38
            </p>
            <span className="rounded-full bg-[#D4FB20] px-2 py-1 font-[Satoshi] text-[10px] font-medium leading-none text-[#242528]">
              +12$
            </span>
          </div>

          <div className="relative z-40 w-full rounded-2xl bg-white p-3 text-left backdrop-blur-[10px] sm:absolute sm:bottom-[20%] sm:right-[16%] sm:w-fit sm:max-w-[calc(100%-1rem)] sm:p-4">
            <h2 className="text-[16px] font-medium leading-[1.2] text-[#242528]">
              Happy Students
            </h2>
            <div className="mt-1 flex items-center gap-0.75">
              <span className="text-[12px] font-normal leading-[1.6] text-[#82868E]">
                4.5 (240)
              </span>
              <span className="flex h-4 items-center">
                <Star
                  aria-hidden="true"
                  size={16}
                  className="fill-[#D4FB20] text-[#D4FB20]"
                />
              </span>
            </div>
            <div className="mt-2 max-w-full overflow-visible">
              <AnimatedTooltip items={happyStudentsData} />
            </div>
          </div>
        </div>
      </div>

      <div className="order-2 w-full text-center lg:min-w-0 lg:flex-1 lg:basis-0 lg:text-left">
        <h2 className="mx-auto w-full max-w-[391px] font-[Poppins] text-[24px] font-semibold leading-[1.2] tracking-[-0.36px] text-[#242528] min-[400px]:text-[26px] sm:text-[32px] md:text-[36px] lg:mx-0 lg:text-[44px]">
          Create &amp; Manage Courses Easily
        </h2>
        <p className="mt-3 font-[Satoshi] text-[14px] font-normal leading-[1.6] text-[#4B4C53] sm:mt-5 sm:text-[16px] md:text-[18px]">
          <span className="font-bold text-[#242528]">ByteSpace</span> supports
          individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <div className="mx-auto mt-8 flex w-fit max-w-full flex-col gap-5 text-left sm:mt-10 sm:gap-8 lg:mx-0 lg:gap-10">
          {courseBenefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#003BE2]">
                <Check aria-hidden="true" className="h-5 w-5 text-white" />
              </span>
              <span className="font-[Satoshi] text-[16px] font-medium leading-[1.2] text-[#242528] sm:text-[18px]">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}