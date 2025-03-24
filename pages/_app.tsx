import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import VeltProvider from "@/contexts/VeltProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <VeltProvider>
        <Component {...pageProps} />
      </VeltProvider>
    </AuthProvider>
  );
}
