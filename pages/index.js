/*
All imports have been taken care of for you.
In addition, I went ahead and added the Tailwind styles for the <main>.
*/

import ThemeSwitcher from '../components/ThemeSwitcher'
import Trivia from '../components/Trivia'
import Footer from '../components/Footer'

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
