import Head from "next/head";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.tsx";
import BrowseCard from "../../components/browsecard.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>givitoo.me | browse</title>
        <meta name="description" content="browse project website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <div className="w-screen flex justify-center">
          <div className="max-w-7xl flex flex-wrap">
            <BrowseCard />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
