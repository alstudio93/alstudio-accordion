/*
All imports have been taken care of for you.

Note: The <main> styling in addition to all other CSS has already been provided for you
*/

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