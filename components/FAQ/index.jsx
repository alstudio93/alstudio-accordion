import React, { useState } from 'react'
import Accordian from './Accordian'
import { TriviaQuestion } from './FAQArray';

const FAQ = () => {


    const [clicked, setClicked] = useState(null);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }
    return (
        <>
            <section id="faq" className='w-full pt-10 mx-auto max-w-section'>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-[#e1e1e1] to-[#00a0c4] font-quicksand text-h1 text-center font-medium'>FAQ</h2>

                {
                    TriviaQuestion.map((faq, index) => (
                        <Accordian
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                            toggle={toggle}
                            clicked={clicked}
                            key={faq.question}

                        />
                    ))
                }
            </section>
        </>
    )
}

export default FAQ