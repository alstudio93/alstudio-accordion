import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {

    const accordionClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
    const accordionOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto font-normal text-accordion-answer"
    
    return (
        <>
            <section id="trivia" className='px-2 pt-10'>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-br
                from-[#e1e1e1] to-[#00a0c4] font-quicksand text-h1
                text-center font-medium'>Schitt&#39;s Creek Trivia</h2>
                {
                    TriviaQuestion.map((trivia, index) => (
                        <div key={trivia.question} className='flex flex-col items-center max-w-3xl px-5 py-2 mx-auto my-5 shadow-lg gap-x-5 dark:shadow-none dark:border dark:border-slate-200 rounded-2xl'>
                            <div className='flex items-center justify-between w-full py-5 cursor-pointer'>
                                <h3>
                                <button
                                    className='w-full pr-6 font-medium leading-relaxed text-left text-accordion-question font-nunito'
                                >
                                    {trivia.question}
                                </button>
                                </h3>
                                <span>
                                Icons
                                </span>
                            </div>

                            {
                                
                                  <p>{trivia.answer}</p>
                                  
                            }

                        </div>
                    ))}
            </section>
        </>
    )
}
export default Trivia








