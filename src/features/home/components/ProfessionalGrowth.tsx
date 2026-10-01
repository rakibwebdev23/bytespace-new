import CommonWrapper from "@/components/shared/CommonWrapper";
import GrowthSection from "./GrowthSection";
import ManageCourses from "./ManageCourses";

export default function ProfessionalGrowth() {
  return (
    <section className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-18">
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[15%] left-0 z-0 aspect-square w-full -translate-x-1/2 translate-y-1/2 rounded-[672px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-[1137px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.04) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 aspect-square w-full translate-x-1/2 translate-y-1/2 rounded-[1137px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      <CommonWrapper className="relative z-10">
        <GrowthSection />
        <ManageCourses />
      </CommonWrapper>
    </section>
  );
}
