import Image from "next/image";
import Link from "next/link";
import CommonWrapper from "@/components/shared/CommonWrapper";
import logo from "../../../public/footer-logo.png";

const linkColumns = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#CED0D3] bg-white">
      <CommonWrapper>
        <div className="px-3 sm:px-0">
          {/* Top section */}
          <div className="flex flex-col gap-12 pb-[48px] pt-[70px] lg:flex-row lg:justify-between">
            {/* Left: logo + newsletter */}
            <div className="w-full max-w-[528px]">
              <Image
                src={logo}
                alt="ByteSpace"
                width={171}
                height={37}
                className="h-auto w-[145px] sm:h-[37px] sm:w-[171px]"
              />

              <p className="mt-3 w-full font-[Satoshi] text-sm font-normal leading-[1.6] text-[#242528]">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              <form className="mt-10 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-start sm:gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] min-w-0 w-full rounded-full border border-[#CED0D3] bg-white px-6 font-[Satoshi] text-base font-normal text-[#242528] outline-none placeholder:text-[#4B4C53] focus:border-[#242528] sm:w-[376px] sm:shrink-0"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-base font-medium text-[#242528] transition-opacity hover:opacity-90 cursor-pointer"
                >
                  Search
                </button>
              </form>

              <p className="mt-6 max-w-[470px] font-[Satoshi] text-xs font-normal leading-[1.6] text-[#242528]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>

            {/* Right: link columns */}
            <nav
              aria-label="Footer"
              className="grid w-full grid-cols-2 gap-x-6 gap-y-8 py-6 sm:grid-cols-3 sm:py-0 lg:w-[580px]"
            >
              {linkColumns.map((column, index) => (
                <ul key={index} className="flex flex-col gap-[22px]">
                  {column.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="break-words font-[Satoshi] text-sm font-normal leading-[1.6] text-[#242528] transition-colors hover:text-[#003BE2]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#CED0D3] py-8 sm:flex-row">
            <p className="text-center font-[Satoshi] text-xs font-normal leading-[1.6] text-[#242528] sm:text-left">
              &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-[Satoshi] text-xs font-normal leading-[1.6] text-[#242528] transition-colors hover:text-[#D4FB20]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CommonWrapper>
    </footer>
  );
}
