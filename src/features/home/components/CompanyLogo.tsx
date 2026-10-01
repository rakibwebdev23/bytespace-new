import Image from "next/image";
import CommonWrapper from "@/components/shared/CommonWrapper";
import logo1 from "../../../../public/home/company-logo/logoipsum-1.svg";
import logo2 from "../../../../public/home/company-logo/logoipsum-2.svg";
import logo3 from "../../../../public/home/company-logo/logoipsum-3.svg";
import logo4 from "../../../../public/home/company-logo/logoipsum-4.svg";
import logo5 from "../../../../public/home/company-logo/logoipsum-5.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function CompanyLogo() {
  return (
    <section className="flex items-center bg-[#F5F5F6] py-10 sm:py-12 lg:min-h-50.5 lg:py-0">
      <CommonWrapper className="px-4 sm:px-10 lg:px-12 xl:px-34">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-x-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex basis-[calc(50%-0.75rem)] items-center justify-center sm:basis-auto lg:min-w-0 lg:flex-1"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="h-8 w-full max-w-35 object-contain sm:h-10.5 sm:w-42 sm:max-w-none lg:w-full lg:max-w-42"
              />
            </div>
          ))}
        </div>
      </CommonWrapper>
    </section>
  );
}