import Footer from "@/components/modules/footer/footer";
import Header from "@/components/modules/header/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/custom.scss";
import ContexManager from "@/setup/appContextManager";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContexManager>
        <Header />
        <Component {...pageProps} />
        <Footer />;
      </ContexManager>
    </>
  );
}
