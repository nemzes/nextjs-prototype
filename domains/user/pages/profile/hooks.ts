import { useSession } from "next-auth/client";

export default function useProfilePage() {
  const [session, loading] = useSession();

  return {
    session,
    loading,
  };
}
