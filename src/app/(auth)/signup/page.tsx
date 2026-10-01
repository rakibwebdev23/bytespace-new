import Link from "next/link";
import AuthPageLayout from "@/components/shared/AuthPageLayout";

export default function SignUpPage() {
  return (
    <AuthPageLayout
      title="Sign up"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <p className="font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#003BE2]">
        Create an Account
      </p>
      <h2 className="mt-3 w-full max-w-[453px] font-[Poppins] text-[30px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] sm:text-[36px] lg:text-[44px]">
        Welcome to ByteSpace
      </h2>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block font-[Satoshi] text-[14px] font-medium leading-[1.2] text-[#242528]">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required className="h-[52px] w-full rounded-xl border border-[#E5E6E8] bg-white px-6 py-3 font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-blue-100" placeholder="Jamie Davis" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-[Satoshi] text-[14px] font-medium leading-[1.2] text-[#242528]">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className="h-[52px] w-full rounded-xl border border-[#E5E6E8] bg-white px-6 py-3 font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-blue-100" placeholder="designer@example.com" />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block font-[Satoshi] text-[14px] font-medium leading-[1.2] text-[#242528]">Password</label>
          <input id="password" name="password" type="password" autoComplete="new-password" required className="h-[52px] w-full rounded-xl border border-[#E5E6E8] bg-white px-6 py-3 font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-blue-100" placeholder="********" />
        </div>
        <button type="submit" className="ml-auto flex w-fit items-center justify-center gap-2 rounded-3xl bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-[18px] font-medium leading-[1.2] text-[#242528] transition hover:bg-[#c4eb12]">Continue</button>
      </form>

      <p className="mt-7 text-center font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#4B4C53]">
        Already have an account? <Link href="/signin" className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#003BE2] hover:underline">Login</Link>
      </p>
    </AuthPageLayout>
  );
}
