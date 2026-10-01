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
    <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-10">
      <div className="relative min-h-[620px] w-full sm:aspect-[577/540] sm:min-h-0 lg:min-w-0 lg:flex-1 lg:basis-0">
        <Image
          src={manageCourses}
          alt="A student working on a laptop"
          width={436}
          height={596}
          priority
          className="absolute inset-0 z-20 h-full w-full object-cover sm:inset-auto sm:left-8 sm:top-0 sm:h-[596px] sm:w-[436px]"
        />

        <Image
          src={maskImage2}
          alt=""
          width={216}
          height={216}
          className="pointer-events-none absolute left-[45%] top-[14%] z-30 h-auto w-[27.6%] object-contain"
        />

        <div className="absolute left-0 top-[6%] z-10 inline-flex w-fit flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]">
          <h3 className="font-[Satoshi] text-base font-medium leading-[1.2] text-[#F5F5F6]">
            Total Revenue
          </h3>
          <p className="font-[Satoshi] text-[10px] font-normal leading-[1.2] text-[#F5F5F6]">
            July 1-28
          </p>
          <p className="font-[Poppins] text-2xl font-semibold leading-8 tracking-[-0.24px] text-[#F5F5F6]">
            $120.29
          </p>
          <div
            className="h-2 w-[min(200px,calc(100vw-5rem))] overflow-hidden rounded-full bg-white/20"
            role="progressbar"
            aria-label="Total revenue progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={55}
          >
            <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
          </div>
        </div>

        <div className="absolute left-0 top-[32%] z-10 inline-flex w-fit flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]">
          <h3 className="font-[Satoshi] text-base font-medium leading-[1.2] text-[#F5F5F6]">
            Year to Date
          </h3>
          <p className="font-[Satoshi] text-[10px] font-normal leading-[1.2] text-[#F5F5F6]">
            2023
          </p>
          <p className="font-[Poppins] text-2xl font-semibold leading-8 tracking-[-0.24px] text-[#F5F5F6]">
            $1,200.38
          </p>
          <span className="rounded-full bg-[#D4FB20] px-2 py-1 font-[Satoshi] text-[10px] font-medium leading-none text-[#242528]">
            +12$
          </span>
        </div>

        <div className="absolute bottom-[20%] right-[16%] z-40 w-fit max-w-[calc(100%-1rem)] rounded-2xl bg-white p-4 text-left backdrop-blur-[10px]">
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

      <div className="w-full lg:min-w-0 lg:flex-1 lg:basis-0">
        <h2 className="w-full max-w-[391px] font-[Poppins] text-[32px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] sm:text-[38px] lg:text-[44px]">
          Create &amp; Manage Courses Easily
        </h2>
        <p className="mt-6 font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#4B4C53] sm:mt-10">
          <span className="font-bold text-[#242528]">ByteSpace</span> supports
          individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <div className="mt-10 flex flex-col gap-10">
          {courseBenefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#003BE2]">
                <Check aria-hidden="true" className="h-5 w-5 text-white" />
              </span>
              <span className="font-[Satoshi] text-[18px] font-medium leading-[1.2] text-[#242528]">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
