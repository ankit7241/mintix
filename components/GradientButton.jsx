"use client";

import React from 'react'

export default function GradientButton({ Text, px, py, withGlow }) {
    return (
        <button className={`z-[1] relative flex flex-row justify-center items-center px-[${px}] py-[${py}] rounded-[10px] bg-primaryGradient hover:scale-105 transition duration-500 ${withGlow && "before:content-[''] before:rounded-[10px] before:w-full before:h-full before:blur-[12.5px] before:bg-primaryGradient before:absolute before:z-index-[0]"}`}>
            <p className="z-[1] SpaceGrotesk font-bold text-base">{Text}</p>
        </button>
    )
}