import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {
    const [isClicked, setIsClicked] = useState(null);
    const revealAnswer = index => {
        if (index === isClicked) {
            return setIsClicked(null);
        }
        setIsClicked(index);
    }

    const toggleBtn = (index) => {
        if (index === isClicked) {
             return  <AiOutlineMinus/>
        } else {
            return <AiOutlinePlus/>
        }
    }
            
    const screenReaderInstructions = (trivia, index) => {
        
        if(index === TriviaQuestion.length - 2 && index === isClicked){
           return trivia.answer + "... Press tab to hear the final question.";
        }

        else if(index === isClicked) {
            return trivia.answer + "... Press tab to hear the next question."
        }
        
        else {
            return trivia.question + "... Press enter to reveal the answer."
        }
    }      

    const accordionClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
    const accordionOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto"
    
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
                                    className='font-medium text-accordion-question leading-relaxed font-nunito w-full text-left pr-5'
                                    id={trivia.headingID}
                                    aria-label={screenReaderInstructions(trivia, index)} 
                                    aria-expanded={isClicked === index ? 'true' : false}
                                    aria-controls={trivia.answerID}
                                    onClick={() => revealAnswer(index)}>{trivia.question}
                                </button>
                                </h3>
                                <span>
                                {toggleBtn(index)}
                                </span>
                            </div>

                            {
                                <section 
                                  id={trivia.answerID}
                                  aria-labelledby={trivia.headingID}
                                  className={isClicked === index ? accordionOpen : accordionClosed}>
                                  <p className='font-normal text-accordion-answer'>{trivia.answer}</p>
                                </section>
                            }

                        </div>
                    ))}
            </section>
        </>
    )
}
export default Trivia








