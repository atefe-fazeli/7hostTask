import Footer from "@/components/modules/footer/footer";
import Header from "@/components/modules/header/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />;
    </>
  );
}
