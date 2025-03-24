import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
      <Link href="/login" className="text-2xl font-bold">
        Login
      </Link>
      <Link href="/signup" className="text-2xl font-bold">
        Signup
      </Link>
    </div>
  );
}
