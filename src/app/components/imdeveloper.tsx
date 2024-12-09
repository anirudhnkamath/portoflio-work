"use client"

import React, { useEffect , useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Imdeveloper() {

    const [typedWords] = useTypewriter({
        words: ["Web Developer.", "Programmer.", "Designer."],
        typeSpeed: 100,
        loop: true,
        deleteSpeed: 70
    })

    return (
        <div className='bg-[transparent] text-fgprimary font-black w-[100%]'>
            I am a <span className='imdeveloper border-r-2 border-fgsecondary bg-[inherit]'>{typedWords}</span>
        </div>
    );
}

