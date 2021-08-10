import Link from "next/link";

export default function DashboardPage({ name = "Dashboard" }) {
  return (
    <>
      <p>{name}</p>
      <Link href="/profile">
        <a>Go to profile page</a>
      </Link>
    </>
  );
}
