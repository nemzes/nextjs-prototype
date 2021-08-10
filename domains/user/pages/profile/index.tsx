import { signOut } from "next-auth/client";
import useProfilePage from "./hooks";

export default function ProfilePage() {
  const { session } = useProfilePage();
  return (
    <>
      <p>Profile</p>
      <textarea value={JSON.stringify(session, null, 2)} readOnly></textarea>
      <p>blah blah</p>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
    </>
  );
}
