import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase";

export function withAuth(Component) {
  return function WithAuth(props) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setUser(user);
        } else {
          router.push("/login");
        }
      });

      return unsubscribe;
    }, [router]);

    if (!user) return null;

    return <Component {...props} />;
  };
}
