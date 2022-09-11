import Trivia from '../components/Trivia'
import Footer from '../components/Footer'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Home() {

  return (
    <>
      <main className='py-20'>

        {/* Light and Dark Mode Toggle */}
        <ThemeSwitcher />

        {/* Trivia Component */}
        <Trivia />

      </main>
      <Footer />
    </>
  )
}
