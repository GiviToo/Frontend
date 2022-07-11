import Head from "next/head";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>givitoo.me</title>
        <meta name="description" content="project website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
      </main>

      <Footer />
    </>
  );
}
