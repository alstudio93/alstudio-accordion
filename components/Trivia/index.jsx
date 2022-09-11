/*
All imports have been taken care of for you. 
The accordionClosed & accordionOpen variables will be used to hide and reveal our answers.
*/

import React, { useState } from 'react'
import { TriviaQuestion } from './TriviaData';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Trivia = () => {
    
    const accordionClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
    const accordionOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto"
    
    return (
        <section id="trivia" className='px-2 pt-10'>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-br
            from-[#e1e1e1] to-[#00a0c4] font-quicksand text-h1
            text-center font-medium'>Schitt&#39;s Creek Trivia</h2>
        </section>
    )
}
export default Trivia








