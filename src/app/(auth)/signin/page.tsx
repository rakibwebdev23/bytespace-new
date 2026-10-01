import Link from "next/link";
import AuthPageLayout from "@/components/shared/AuthPageLayout";

export default function SignInPage() {
  return (
    <AuthPageLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <h2 className="font-[Poppins] text-2xl font-semibold tracking-tight text-gray-900">
        Sign in
      </h2>

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
    </AuthPageLayout>
  );
}
