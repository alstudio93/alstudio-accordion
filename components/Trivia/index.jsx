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

    return (
        <>
            <section id="trivia" tabIndex="0">
                <h2 >Schitt&#39;s Creek Trivia</h2>
                {
                    TriviaQuestion.map((trivia, index) => (
                        <div
                            tabIndex="0"
                            key={trivia.question}
                            className='accordion'
                        >

                            <div className='accordion-question'
                                onClick={() => revealAnswer(index)}>
                                    <h3>
                                    {trivia.question}
                                    </h3>
                                <button aria-expanded={isClicked === index ? 'true' : false}>
                                    {toggleBtn(index)}
                                </button>
                            </div>

                            {
                                <div className={isClicked === index ? "accordion-open" : "accordion-closed"}>
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








