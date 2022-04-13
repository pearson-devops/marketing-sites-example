import "../styles.css";
import { Layout } from "../components/layout";
import TinaProvider from "../.tina/components/TinaDynamicProvider";

const App = ({ Component, pageProps }) => {

  if(process.env.NODE_ENV === "development") {
    return (
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    )
  } else {
    return (
      <Component {...pageProps} />
    )
  }
};

export default App;
