import Link from "next/link";
import CommonWrapper from "@/components/shared/CommonWrapper";

export default function SignInPage() {
  return (
    <section className="min-h-screen bg-orange-50 py-12">
      <CommonWrapper className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg shadow-orange-950/5 sm:p-10">
        <Link href="/" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
          Halal Haven
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-600">Sign in to continue to your account.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="you@example.com" />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Link href="#" className="text-sm font-medium text-orange-600 hover:text-orange-700">Forgot password?</Link>
            </div>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700">Sign in</button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-600">
          Don&apos;t have an account? <Link href="/signup" className="font-semibold text-orange-600 hover:text-orange-700">Create one</Link>
        </p>
      </div>
      </CommonWrapper>
    </section>
  );
}
