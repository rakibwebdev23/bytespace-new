import Link from "next/link";
import AuthPageLayout from "@/components/shared/AuthPageLayout";

const inputClass =
  "h-12 w-full rounded-xl border border-[#E5E6E8] bg-[#FAFAFB] px-4 py-3 font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-blue-100 sm:h-[52px] sm:px-6 sm:text-[18px]";

const labelClass =
  "mb-2 block font-[Satoshi] text-[14px] font-medium leading-[1.2] text-[#242528]";

export default function SignUpPage() {
  return (
    <AuthPageLayout
      title="Sign up"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="lg:min-h-[619px]">
      <p className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#003BE2] sm:text-[18px]">
        Create an Account
      </p>
      <h2 className="w-full max-w-[453px] font-[Poppins] text-[28px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] sm:text-[36px] lg:text-[44px]">
        Welcome to ByteSpace
      </h2>

      <form className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
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
          className="flex w-full items-center justify-center gap-2 rounded-3xl bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-[18px] font-medium leading-[1.2] text-[#242528] transition hover:bg-[#c4eb12] sm:ml-auto sm:w-fit"
        >
          Continue
        </button>
      </form>

      <p className="mt-6 text-center font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#82868E] sm:mt-7">
        Already have an account?{" "}
        <Link href="/signin" className="text-[#003BE2] hover:underline">
          Login
        </Link>
      </p>
      </div>
    </AuthPageLayout>
  );
}
