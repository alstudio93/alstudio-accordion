import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {

    return (
        <>
            <section id="trivia">
                <h2>Schitt&#39;s Creek Trivia</h2>
                {
                    TriviaQuestion.map((trivia, index) => (
                        <div key={trivia.question} className='accordion'>
                            <div className='accordion-question'>
                                <h3>
                                    <button>{trivia.question}</button>
                                </h3>
                                <span>
                                    {/* Icons */}
                                </span>
                            </div>
                            {
                                <section>
                                    <p className='accordion-answer'>{trivia.answer}</p>
                                </section>
                            }
                        </div>
                    ))
                }
            </section>
        </>
    )
}
export default Trivia








