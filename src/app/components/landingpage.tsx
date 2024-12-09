import React from 'react'
import Imdeveloper from './imdeveloper'

export default function Landingpage() {
    return (
        <section className='min-h-[80vh] bg-bgprimary flex-flex-col content-center px-[1rem] md:min-h-[calc(100vh-60px)] md:px-[7rem] zero:px-[4rem]'>

            <div className="flex flex-col gap-[2rem] absolute top-[20%] md:top-[25%]">
                <h1 className='font-oswald font-semibold text-8xl md:text-9xl break-normal'>
                    <span className='text-fgprimary'>Hello</span> <span className='text-fgsecondary whitespace-nowrap'>World !</span>
                </h1>
                <div className='flex flex-col font-source text-fgprimary'>
                    <p className='text-5xl md:text-6xl'>I'm Anirudh,</p>
                    <p className='text-2xl text-fgsecondary md:text-3xl'>CSE Undergrad at NIT Calicut.</p>
                </div>
                <div className='text-fgprimary text-3xl font-oswald text-black md:text-4xl'>
                    <Imdeveloper />
                </div>
            </div>

        </section>
    )
}
