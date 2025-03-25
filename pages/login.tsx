// components/Login.js
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
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
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>

      <p className="cta">
        New user? <Link href="/signup">Signup</Link>
      </p>
    </div>
  );
}
