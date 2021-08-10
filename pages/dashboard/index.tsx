import DashboardPage from "domains/dashboard/pages/dashboard";
import { getLayout } from "domains/common/layouts/global";

const Page = () => <DashboardPage />;

Page.getLayout = getLayout;

export default Page;
