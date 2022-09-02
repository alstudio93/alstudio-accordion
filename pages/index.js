import Head from 'next/head'
import Trivia from '../components/Trivia'
import Footer from '../components/Footer'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Home() {

  return (
    <>
      <Head>
        <title>ALStudio Accordian</title>
        <meta name="description" content="Accordian designed and developed by ALStudio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeSwitcher />
        <Trivia />
      </main>
      <Footer />
    </>
  )
}
