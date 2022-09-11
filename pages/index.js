import ThemeSwitcher from '../components/ThemeSwitcher'
import Trivia from '../components/Trivia'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <main>

        {/* Light and Dark Mode Toggle */}
        <ThemeSwitcher />

        {/* Trivia Component */}
        <Trivia />

      </main>
      <Footer />
    </>
  )
}