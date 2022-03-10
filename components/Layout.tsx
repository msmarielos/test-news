import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="content">
        <div>{children}</div>
      </main>
    </>
  );
}
