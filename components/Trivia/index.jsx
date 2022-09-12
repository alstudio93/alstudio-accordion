import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {

    return (
        <>
            <section id="trivia">
                <h2 >Schitt&#39;s Creek Trivia</h2>
                {
                    TriviaQuestion.map((trivia, index) => (
                        <div key={trivia.question} className='accordion'>
                            <div className='accordion-question'>

                                <h3>
                                    <button>{trivia.question}</button>
                                </h3>

                                <span>
                                    Icons
                                </span>

                            </div>
                            {
                                <div 
                                    // className={isClicked === index ? "accordion-open" : "accordion-closed"}
                                >
                                    <p>{trivia.answer}</p>
                                </div>
                            }
                        </div>
                ))}
            </section>
        </>
    )
}
export default Trivia








