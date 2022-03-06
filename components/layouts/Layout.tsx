import Head from "next/head";
import { FC } from "react";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon APP"}</title>
        <meta name="author" content="Brayan Saborio"></meta>
        <meta name="description" content={`${title}`}></meta>
        <meta name="keywords" content={`${title}`}></meta>
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/banner.png`} />
      </Head>
      <main> {children}</main>
    </>
  );
};
