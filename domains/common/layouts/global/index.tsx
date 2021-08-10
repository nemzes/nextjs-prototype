import Link from "next/link";

export default function GlobalLayout({ children }) {
  return (
    <>
      <h1>Global Layout</h1>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Link href="/dashboard2">
        <a>Dashboard 2</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <hr />
      <main>{children}</main>
      <hr />
      <footer>Global footer</footer>
    </>
  );
}

export const getLayout = (page) => <GlobalLayout>{page}</GlobalLayout>;
