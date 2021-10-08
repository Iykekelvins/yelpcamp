import "../styles/index.scss";
import Layout from "../components/Reusable/Layout";
import { AppProvider } from "../context/context";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </Provider>
  );
}

export default MyApp;
