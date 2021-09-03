import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/components/layout";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return pageProps.layout === "APP" ? (
    <React.StrictMode>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </React.StrictMode>
  ) : (
    <div>Hello</div>
  );
}
export default MyApp;
