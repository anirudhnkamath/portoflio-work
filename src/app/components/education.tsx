import React from 'react'

export default function Education() {
  return (
    <section className='flex flex-col gap-[3rem] pb-[4rem]'>
        <h1 className='text-center text-5xl font-oswald text-fgsecondary lg:text-7xl'>Education</h1>
        <div className='flex flex-col items-center font-source gap-[2rem] md:flex-row md:justify-center md:items-center'>

            <div className="card text-center w-[min(80vw,300px)] flex flex-col border-l-4 border-fgsecondary p-[1rem] md:w-1/3 md:border-b-4 md:border-l-0">
                <h1 className='text-3xl text-fgprimary font-semibold md:text-4xl'>Bhavans, Girinagar</h1>
                <p className='text-xl text-fgsecondary italic md:text-2xl'>Higher secondary education</p>
                <p className='text-xl text-fgsecondary italic md:text-2xl'>2010-2023</p>
            </div>
            
            <div className="card text-center w-[min(80vw,300px)] flex flex-col border-l-4 border-fgsecondary p-[1rem] md:w-1/3 md:border-b-4 md:border-l-0 md:h-full">
                <h1 className='text-3xl text-fgprimary font-semibold md:text-4xl'>NIT Calicut</h1>
                <p className='text-xl text-fgsecondary italic md:text-2xl'>Btech in CSE</p>
                <p className='text-xl text-fgsecondary italic md:text-2xl'>2023-Present Day</p>
            </div>

        </div>
    </section>
  )
}
