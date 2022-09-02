import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaArray';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {
    const [isClicked, setIsClicked] = useState(null);
    const revealAnswer = index => {
        if (isClicked === index) {
            return setIsClicked(null);
        }
        setIsClicked(index);
    }

    const toggleBtn = (index) => {
        if (isClicked === index) {
            return <AiOutlineMinus title="click to hide the answer" aria-label='Hide Answer' />
        } else {
            return <AiOutlinePlus title="click to reveal the answer" aria-label='Show Answer'/>
        }
    }

    const accordionClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
    const accordionOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto"
    return (
        <>
            <section id="trivia" tabIndex="0" className='px-2 pt-10'>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-br
                from-[#e1e1e1] to-[#00a0c4] font-quicksand text-h1
                text-center font-medium'>Schitt&#39;s Creek Trivia</h2>
                {
                    TriviaQuestion.map((trivia, index) => (
                        <div
                            tabIndex="0"
                            key={trivia.question}
                            className='flex flex-col items-center max-w-3xl px-5 py-2 mx-auto my-5 shadow-lg gap-x-5 dark:shadow-none dark:border dark:border-slate-200 rounded-2xl'
                        >

                            <div className='flex items-center justify-between w-full py-5 cursor-pointer'
                                onClick={() => revealAnswer(index)}>
                                    <h3 className='font-medium text-[0.95rem] md:text-lg leading-relaxed font-nunito w-[86%]'>
                                    {trivia.question}
                                    </h3>
                                <button aria-expanded={isClicked === index ? 'true' : false}>
                                    {toggleBtn(index)}
                                </button>
                            </div>

                            {
                                <div className={isClicked === index ? accordionClosed && accordionOpen : accordionClosed}                                >
                                    <p className='font-normal text-[0.9rem] sm:text-base'>{trivia.answer}</p>

                                </div>
                            }

                        </div>
                    ))}
            </section>
        </>
    )
}
export default Trivia








