import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Accordian = ({
    question,
    answer,
    index,
    toggle,
    clicked
}) => {

    const toggleBtn = () => {
        if (clicked === index) {
            return <AiOutlineMinus />
        } else {
            return <AiOutlinePlus />
        }
    }

    const accordianClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
    const accordianOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto"

    return (
        <div
            className='flex flex-col items-center max-w-3xl px-5 py-2 mx-auto my-5 shadow-lg accordian gap-x-5 dark:shadow-none dark:border dark:border-slate-200 rounded-2xl'
        >

            <div className='flex items-center justify-between w-full py-5 cursor-pointer' onClick={() => toggle(index)}>
                {
                    <h3 className='font-medium text-[0.95rem] md:text-lg leading-relaxed font-nunito w-[86%]'>
                        {question}
                    </h3>
                }

                <button
                    aria-expanded={clicked === index ? 'true' : 'false'}
                    title="click to reveal the answer"
                >
                    {toggleBtn()}
                </button>

            </div>

            {
                <div className={clicked === index ? accordianClosed && accordianOpen : accordianClosed}
                >
                    <p className='font-normal text-[0.9rem] sm:text-base'>{answer}</p>

                </div>
            }

        </div>
    )
}

export default Accordian