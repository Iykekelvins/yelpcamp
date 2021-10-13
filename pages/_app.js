import "../styles/index.scss";
import { AppProvider } from "../context/context";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}

export default MyApp;
