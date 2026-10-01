import Link from "next/link";
import AuthPageLayout from "@/components/shared/AuthPageLayout";

const inputClass =
  "h-12 w-full rounded-xl border border-[#E5E6E8] bg-[#FAFAFB] px-4 py-3 font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#242528] outline-none transition placeholder:text-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-blue-100 sm:h-[52px] sm:px-6 sm:text-[18px]";

const labelClass =
  "mb-2 block font-[Satoshi] text-[14px] font-medium leading-[1.2] text-[#242528]";

const socialButtonClass =
  "flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E6E8] bg-white text-[#242528] transition hover:bg-[#F5F5F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] sm:h-[72px] sm:w-[72px] sm:rounded-3xl";

const socialIconClass = "h-7 w-7 sm:h-[34px] sm:w-[34px]";

export default function SignInPage() {
  return (
    <AuthPageLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#003BE2] sm:text-[18px]">
        Sign In
      </p>
      <h2 className="w-full max-w-[453px] font-[Poppins] text-[28px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] sm:text-[36px] lg:text-[44px]">
        Welcome Back
      </h2>

      <form className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
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
            autoComplete="current-password"
            required
            className={inputClass}
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-3xl bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-[18px] font-medium leading-[1.2] text-[#242528] transition hover:bg-[#c4eb12] sm:ml-auto sm:w-fit"
        >
          Sign In
        </button>
      </form>

      <div className="mt-10 flex items-center gap-4 sm:mt-[75px]">
        <span className="h-px flex-1 bg-[#E5E6E8]" />
        <span className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#82868E]">
          or
        </span>
        <span className="h-px flex-1 bg-[#E5E6E8]" />
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className={socialButtonClass}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={socialIconClass}
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className={socialButtonClass}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={socialIconClass}
          >
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
        </button>
      </div>

      <p className="mt-10 text-center font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#82868E] sm:mt-[73px]">
        New user?{" "}
        <Link href="/signup" className="text-[#003BE2] hover:underline">
          Create an account
        </Link>
      </p>
    </AuthPageLayout>
  );
}