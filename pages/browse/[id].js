import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer.jsx";
import ProductDetail from "../../components/productdetail.jsx";

const DetailCard = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>givitoo.me | browse</title>
        <meta name="description" content="browse project website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Navbar />
        <ProductDetail props={id} />
      </main>

      <Footer />
    </>
  );
};

export default DetailCard;
