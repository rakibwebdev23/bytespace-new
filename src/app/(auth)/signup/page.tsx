import Link from "next/link";
import CommonWrapper from "@/components/common/CommonWrapper";

export default function SignUpPage() {
  return (
    <section className="min-h-screen bg-orange-50 py-12">
      <CommonWrapper className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg shadow-orange-950/5 sm:p-10">
        <Link href="/" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
          Halal Haven
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Create your account</h1>
        <p className="mt-2 text-sm text-gray-600">Join Halal Haven and start learning today.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" autoComplete="new-password" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="Create a password" />
          </div>
          <button type="submit" className="w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700">Create account</button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-600">
          Already have an account? <Link href="/signin" className="font-semibold text-orange-600 hover:text-orange-700">Sign in</Link>
        </p>
      </div>
      </CommonWrapper>
    </section>
  );
}
