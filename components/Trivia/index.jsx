import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {
    const [isClicked, setIsClicked] = useState(null);
    const revealAnswer = (index) => {
        if (isClicked === index) {
            return setIsClicked(null);
        }
        setIsClicked(index);
    }

    const toggleBtn = (index) => {
        if (isClicked === index) {
            return  <AiOutlineMinus/>
        } else {
            return <AiOutlinePlus/>
        }
    }

    const screenReaderInstructions = (trivia, index) => {
        if(isClicked === index) return trivia.answer
        if(isClicked !== index) return trivia.question + " Press enter to reveal the answer."
    }

    return (
        <>
            <section id="trivia">
                <h2 >Schitt&#39;s Creek Trivia</h2>
                {
                    TriviaQuestion.map((trivia, index) => (
                        <div key={trivia.question} className='accordion'>
                            <div className='accordion-question'>
                                <h3>
                                <button
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
                                <div 
                                id={trivia.answerID}
                                aria-labelledby={trivia.headingID}
                                className={isClicked === index ? "accordion-open" : "accordion-closed"}>
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








