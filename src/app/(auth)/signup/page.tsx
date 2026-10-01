import Link from "next/link";
import AuthPageLayout from "@/components/shared/AuthPageLayout";

const inputClass =
  "h-[52px] w-full rounded-2xl border border-[#E5E6E8] bg-white px-6 py-3 font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-blue-100";

const labelClass =
  "mb-2 block font-[Satoshi] text-[14px] font-medium leading-[1.2] text-[#242528]";

export default function SignUpPage() {
  return (
    <AuthPageLayout
      title="Sign up"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="flex min-h-[664px] flex-col lg:min-h-[670px]">
        <p className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#003BE2]">
          Create an Account
        </p>
        <h2 className="w-full max-w-[453px] font-[Poppins] text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528]">
          Welcome to
          <br />
          ByteSpace
        </h2>

        <form className="mt-10 space-y-6 h-full">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
              placeholder="Jamie Davis"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClass}
              placeholder="designer@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className={inputClass}
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="ml-auto flex w-fit items-center justify-center rounded-full bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-[18px] font-medium leading-[1.2] text-[#242528] transition hover:bg-[#c4eb12]"
          >
            Continue
          </button>
        </form>

        <p className="mt-auto pt-8 text-center font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#242528]/80">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#003BE2] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  );
}
