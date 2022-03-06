import Head from "next/head";
import { FC } from "react";

interface Props {
  title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon APP"}</title>
        <meta name="author" content="Brayan Saborio"></meta>
        <meta name="description" content={`${title}`}></meta>
        <meta name="keywords" content={`${title}`}></meta>
      </Head>
      <main> {children}</main>
    </>
  );
};
