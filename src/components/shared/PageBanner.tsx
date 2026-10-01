import CommonWrapper from "@/components/shared/CommonWrapper";

interface PageBannerProps {
  title: string;
}

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <section
      className="flex min-h-36 items-center justify-center bg-[#003BE2] bg-cover bg-center bg-no-repeat py-8 sm:min-h-44 sm:py-10 lg:min-h-52"
      style={{ backgroundImage: "url('/register-back.png')" }}
    >
      <CommonWrapper>
        <h1 className="text-center font-[Poppins] text-[24px] font-semibold leading-[1.2] tracking-[-0.36px] text-white min-[400px]:text-[26px] sm:text-[34px] sm:tracking-[-0.44px] md:text-[38px] lg:text-[44px]">
          {title}
        </h1>
      </CommonWrapper>
    </section>
  );
}
