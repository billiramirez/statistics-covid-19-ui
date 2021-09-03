import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return pageProps.layout === "APP" ? (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  ) : (
    <div>Hello</div>
  );
}
export default MyApp;
