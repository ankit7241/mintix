import React from 'react'

export default function GradientButton({ Text, px, py }) {
    return (
        <button className={`flex flex-row justify-center items-center px-[${px}] py-[${py}] rounded-[10px] bg-primaryGradient`}>
            <p className="SpaceGrotesk font-bold text-base">{Text}</p>
        </button>
    )
}