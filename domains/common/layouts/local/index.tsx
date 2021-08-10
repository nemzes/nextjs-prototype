import GlobalLayout from "domains/common/layouts/global";

export default function LocalLayout({ children }) {
  return (
    <GlobalLayout>
      <h2>Local layout</h2>
      <hr />
      <div>{children}</div>
    </GlobalLayout>
  );
}

export const getLayout = (page) => <LocalLayout>{page}</LocalLayout>;
