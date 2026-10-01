import CourseCard from "@/components/shared/CourseCard";
import CommonWrapper from "@/components/shared/CommonWrapper";
import Image from "next/image";
import figmaCourse from "@/data/courses/course-1";
import professionalImage from "../../../../public/home/professional-growth/professional-image.png";
import maskImage from "../../../../public/home/professional-growth/mask.png";

const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function ProfessionalGrowth() {
  return (
    <section className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-0 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-[1137px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 aspect-square w-full translate-x-1/2 -translate-y-1/2 rounded-[1137px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.02) 53%, rgba(0, 59, 226, 0.00) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />
      <CommonWrapper className="relative z-10">
        <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-10">
          <div className="w-full lg:min-w-0 lg:flex-1 lg:basis-0">
            <h2 className="font-[Poppins] text-[32px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] sm:text-[38px] lg:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#4B4C53] sm:mt-10 sm:text-[18px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 sm:mt-10 sm:gap-x-12">
              {growthStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-[Poppins] text-[30px] font-medium leading-11 tracking-[-0.36px] text-[#003BE2] sm:text-[36px]">
                    {stat.value}
                  </p>
                  <p className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#4B4C53] sm:text-[18px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[577/540] w-full lg:min-w-0 lg:flex-1 lg:basis-0">
            {/* 1. Course card: top-left */}
            <CourseCard
              course={figmaCourse}
              staticCard
              imageHeightClass="h-[180px]"
              className="absolute h-[384px]  w-[370px]"
            />

            {/* professional image */}
            <Image
              src={professionalImage}
              alt="A student working on a laptop"
              width={570}
              height={520}
              priority
              className="absolute top-[2.5%] z-20 h-[540px] w-[577px] object-cover"
            />

            {/* learning progress card */}
            <div className="absolute left-[52%] top-[34%] z-30 flex flex-col items-start gap-2 rounded-2xl bg-white p-4 lg:w-[46%]">
              <div className="relative flex w-full flex-col items-start gap-2">
                <Image
                  src={maskImage}
                  alt=""
                  width={216}
                  height={216}
                  className="pointer-events-none absolute -right-[8%] -top-full z-0 h-auto w-[60%] bg-amber-500 object-contain"
                />
                <h3 className="relative z-10 font-[Satoshi] text-sm font-medium leading-6 text-[#242528]">
                  Learning Progress
                </h3>
                <p className="relative z-10 font-[Poppins] text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528]">
                  55%
                </p>
                <div
                  className="relative z-10 h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]"
                  role="progressbar"
                  aria-label="Learning progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={55}
                >
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
}
