import Head from 'next/head'
import Navbar from '../components/navbar.jsx'
import Register from '../components/register.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>givitoo.me | Register</title>
        <meta name="description" content="register to your account on givitoo.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Register />
      </main>
    </>
  )
}
