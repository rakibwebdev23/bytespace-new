import Image from "next/image";
import CommonWrapper from "@/components/shared/CommonWrapper";
import logo1 from "../../../../public/home/company-logo/logoipsum-1.svg";
import logo2 from "../../../../public/home/company-logo/logoipsum-2.svg";
import logo3 from "../../../../public/home/company-logo/logoipsum-3.svg";
import logo4 from "../../../../public/home/company-logo/logoipsum-4.svg";
import logo5 from "../../../../public/home/company-logo/logoipsum-5.svg";

export default function CompanyLogo() {
  return (
    <section className="flex min-h-50.5 items-center bg-[#F5F5F6]">
      <CommonWrapper className="px-6 sm:px-10 lg:px-34">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:justify-between sm:gap-x-10">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="h-10.5 w-42 object-contain"
            />
          ))}
        </div>
      </CommonWrapper>
    </section>
  );
}
