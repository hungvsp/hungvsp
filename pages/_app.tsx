import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      hello
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
