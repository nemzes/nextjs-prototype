import ProfilePage from "domains/user/pages/profile";
import { getLayout } from "domains/common/layouts/local";

const Page = () => <ProfilePage />;

Page.auth = {
  role: "admin",
  loading: <div>custom loading message</div>,
  unauthorized: "/", // redirect to this url
};

Page.getLayout = getLayout;

export default Page;
