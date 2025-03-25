import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
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
    <div className="auth-form">
      <h1 className="title">Log In to DevInsights</h1>
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <button>Sign in with Google</button>
      </form>

      <p className="cta">
        New user? <Link href="/signup">Signup</Link>
      </p>
    </div>
  );
}
