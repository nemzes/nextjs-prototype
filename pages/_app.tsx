import { Provider as SessionProvider } from "next-auth/client";

import Auth from "domains/common/auth";
import "domains/common/styles/globals.css";

// const passthrough = ({ children }) => children;
const passthrough = (page) => page;

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || passthrough;
  const laidOutComponent = getLayout(<Component {...pageProps}></Component>);

  // TODO: Can we replace <Auth> with hook to avoid a full tree re-render?

  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth options={Component.auth}>{laidOutComponent}</Auth>
      ) : (
        laidOutComponent
      )}
    </SessionProvider>
  );
}

export default MyApp;
