import Head from 'next/head'
import Navbar from '../components/navbar.tsx'
import Register from '../components/register.tsx'

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
