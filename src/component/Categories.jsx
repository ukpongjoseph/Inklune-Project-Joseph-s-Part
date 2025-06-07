import React from 'react'

const Categories = () => {
    const data = [
    {
        img:'../src/assets/creative.png',
        title:"Creative Writing",
        text:"fiction, poetry and narrative exploration"
    },
    {
        img:'../src/assets/literal.png',
        title:"Literal Analysis",
        text:"Deep dives into themes, styles and meaning"
    },
    {
        img:'../src/assets/peronal.png',
        title:"Personal Growth",
        text:"Self-discovery through written word"
    },
    {
        img:'../src/assets/craft.png',
        title:"Craft & Techniques",
        text:"Mastering the tools of effective writing"
    },
    {
        img:'../src/assets/cultural.png',
        title:"Cultural Commentary",
        text:"Perspectives on society and human experience"
    },
    {
        img:'../src/assets/professional.png',
        title:"Professional writing",
        text:"Career insights for writers and editors"
    },
    {
        img:'../src/assets/wellness.png',
        title:"Wellness & Mindfulness",
        text:"Writing as a path to mental wellbeing"
    },
    {
        img:'../src/assets/historical.png',
        title:"Historical Perspective",
        text:"Learning from writers across time"
    }
]
  return (
    <div id='category' className='w-full bg-gray-200 py-3 md:py-5'>
        <div className='w-[95%] md:w-11/12 container mx-auto'>
            <h1 className='text-center font-bold py-5 text-xl lg:text-3xl'>Explore Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
                {
                    data.map((item, index) => {
                        return(
                            <div key={index} className='bg-white rounded-lg flex flex-col justify-center items-center text-sm md:text-md py-6'>
                                <span><img className='w-[40%] mx-auto' src={item.img} alt="" /></span>
                                <h1 className='font-bold py-2 text-lg md:text-xl'>{item.title}</h1>
                                <p className='w-[90%] mx-auto text-center'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories