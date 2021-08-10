import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";

export default function Auth({ options, children }) {
  const [session, loading] = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return options.loading || <div>Authenticating...</div>;
}
