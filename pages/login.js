import Head from 'next/head'
import Navbar from '../components/navbar.jsx'
import Login from '../components/login.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>givitoo.me | Login</title>
        <meta name="description" content="login to your account on givitoo.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Login />
      </main>
    </>
  )
}
