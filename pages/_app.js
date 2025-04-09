import Footer from "@/components/modules/footer/footer";
import Header from "@/components/modules/header/header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/custom.scss";
import { ThemeProvider } from "@/context/themeContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />;
      </ThemeProvider>
    </>
  );
}
