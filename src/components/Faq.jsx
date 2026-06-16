import React, { useState } from 'react'

export default function Faq() {
    const [activeId, setActiveId] = useState(false)

    const data = [
        {
            id: 1,
            question: "How long is a Katana?",
            answer:
                "The classic size of a Katana is about 40 inches. However, there are different variations depending on the type of sword and the user's height. The most common sword sizes are 40 inches for Daito and 35 inches for Shoto. These measurements refer to the total length of the sword. The blade itself generally varies between 24 and 30 inches."
        },
        {
            id: 2,
            question: "How to sharpen a Katana?",
            answer:
                "1. Shaping work using an uchigumori stone to remove rust and scratches.\n2. The blade is passed over progressively finer stones to remove marks left by the uchigumori stone.\n3. Hazuya stones attached to traditional Japanese paper are used to remove microscopic scratches.\n4. Finally, a Jizuya stone is rubbed over the blade surface until the desired finish is achieved."
        },
        {
            id: 3,
            question: "Why were Katanas made?",
            answer:
                "According to historians, the Katana was developed to create more effective swords for fighting Mongol forces during the invasions of Japan between 1274 and 1281. The older straight swords were less suitable for combat on horseback, while the Katana's curved blade was better adapted to the needs of warriors in battle."
        },
        {
            id: 4,
            question: "Do you Ship worldwide?",
            answer:
                "We deliver worldwide. However, we invite you to check in advance the conditions of purchase and import of weapons in your country. We cannot check the regulations of each country at every moment and modify our countries served according to that."
        },
        {
            id: 5,
            question: "How much does a real Katana cost?",
            answer: "A Katana made in Japan with the famous Tamahagane steel by a Japanese blacksmith in the tradition usually costs between $5,000 and $15,000. However, there is a lot of confusion around the Katana, as there are also antique Katanas that are traditionally forged and can be found second hand for $1000 and up depending on the state. You can also find traditionally forged Katanas in other countries with other steels also very qualitative for a few hundred dollars. In our store, we offer Katanas starting at $200."
        }

    ];


    const handleQs = (id) => {

        setActiveId(activeId === id ? null : id)
    }

    return (
        <div className='relative bg-black min-h-screen px-4 py-10 md:px-8 w-screen'>
            <div className='max-w-4xl mx-auto bg-black'>
                {data.map((items) => (
                    <div key={items.id} className='mb-4'>
                        <div className=' relative bg-gray-900 text-white px-4 py-6 md:p-5 cursor-pointer text-sm md:text-lg flex justify-between items-center'
                            onClick={() => handleQs(items.id)}>
                            <span className='quicksand'>{items.question}</span>
                            <span className={`absolute right-9 text-2xl transition-transform duration-300 
                                ${activeId === items.id ? 'rotate-45' : ''}`}>+</span>
                        </div>
                        <p className={`overflow-hidden transition-all duration-500 ease-in-out 
                               ${activeId === items.id ? 'max-h-[500px] opacity-100 text-white ' : ''}`}>{items.answer}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
