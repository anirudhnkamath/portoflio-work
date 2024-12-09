import React from 'react'

export default function Aboutpage() {
    return (
        <section className='bg-bgsecondary text-fgprimary flex flex-col p-[2rem] gap-[2rem] md:px-[2rem] md:border-l-[10px] md:border-fgsecondary md:rounded-r-[30px]'>
            <h1 className='text-5xl text-fgsecondary font-oswald pl-[1rem] lg:text-7xl xl:pl-[4rem]'>About Me</h1>
            <div className='flex flex-col items-center gap-[2rem] xl:flex-row xl:items-start'>
                <div className='w-[70%] xl:w-[30%] flex items-center self-center'>
                    <img src="/anirudh.jpg" alt="photo" height="500" width="500" className='w-auto h-[100%]'/>
                </div>
                <div className="font-source text-xl leading-8 xl:text-2xl xl:h-[100%] xl:w-[70%] xl:pt-[1em] xl:leading-10 flex flex-col gap-[2rem] justify-start">
                    <p className=''>
                        I am Anirudh N Kamath, a front-end developer and programmer currently pursuing a B-Tech in Computer Science and Engineering at the National Institute of Technology, Calicut.
                    </p>
                    <p className='text-fgsecondary font-semibold'>
                        I am passionate about building intuitive, responsive web applications and writing clean, efficient code. I strive to create user-friendly and innovative solutions to real-world challenges. Always keen to expand my programming skills and stay updated with industry trends, I am committed to contributing to impactful projects and the tech community. Let’s connect and collaborate on exciting challenges!
                    </p>
                </div>
            </div>
        </section>
    )
}
