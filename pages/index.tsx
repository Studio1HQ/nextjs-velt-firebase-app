import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold mb-4">DevInsights</h1>

      <div className="flex space-x-4">
        <Link href="/login" className="text-2xl font-bold">
          Login
        </Link>
        <Link href="/signup" className="text-2xl font-bold">
          Signup
        </Link>
      </div>
    </div>
  );
}
