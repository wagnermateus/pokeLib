import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"/>
        <title>PokeLib</title>
    </Head>
      <Navbar />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </>
  );
}