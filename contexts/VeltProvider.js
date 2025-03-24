import { useEffect, useState } from "react";
import { VeltProvider } from "@veltdev/react";
import { useAuth } from "./AuthContext";

export default function VeltWrapper({ children }) {
  const { currentUser } = useAuth();
  const [veltUser, setVeltUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      // Create a Velt user from Firebase user
      setVeltUser({
        userId: currentUser.uid,
        name: currentUser.displayName || currentUser.email.split("@")[0],
        email: currentUser.email,
        photoUrl:
          currentUser.photoURL ||
          `https://ui-avatars.com/api/?name=${currentUser.email.split("@")[0]}`,
      });
    } else {
      setVeltUser(null);
    }
  }, [currentUser]);

  if (!currentUser) {
    return children;
  }

  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY} user={veltUser}>
      {children}
    </VeltProvider>
  );
}
