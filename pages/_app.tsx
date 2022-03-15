import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import logo from "../assets/sg_logo.png";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  config.autoAddCss = false;

  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Humans of Sourcegraph</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className={styles.logo}>
        <Link href="/">
          <Image
            className={styles.imgComponent}
            src={logo}
            alt="Sourcegraph logo"
            width={320}
            height={54}
          />
        </Link>
      </div>
      <div className={styles.pageDescription}>
        <p className={styles.heavyText}>Humans of Sourcegraph</p>
        {/* <p className={styles.mutedText}>
          Familiarize yourself with our teammates and organization.
        </p> */}
      </div>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
