import Head from "next/head";
import Navbar from "../../components/navbar.tsx";
import Footer from "../../components/footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>givitoo.me | browse</title>
        <meta name="description" content="browse project website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="flex flex-row space-x-4">

        </div>
      </main>

      <Footer />
    </>
  );
}
