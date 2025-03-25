import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setError("");
      await login();
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to sign in: " + (err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <main className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md mt-10 bg-neutral-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">DevInsights</h1>
        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md my-4 cursor-pointer hover:bg-blue-600">
          Sign in with Google
        </button>
      </main>
    </div>
  );
}
