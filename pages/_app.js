import "../styles/index.scss";
import Layout from "../components/Reusable/Layout";
import { AppProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
