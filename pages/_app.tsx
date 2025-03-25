import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import {
  VeltComments,
  VeltCommentsSidebar,
  VeltPresence,
  VeltProvider,
} from "@veltdev/react";

export default function App({ Component, pageProps }: AppProps) {


  return (
    <AuthProvider>
      <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
        <VeltComments />
        <VeltPresence />
        <VeltCommentsSidebar pageMode={true} />
        <Component {...pageProps} />
      </VeltProvider>
    </AuthProvider>
  );
}
