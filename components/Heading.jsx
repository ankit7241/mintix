import React from 'react'

export default function Heading({ text, size }) {
    return (
        <div className="relative z-10">
            <h2
                className={`SpaceGrotesk font-bold text-${size} text-white before:content-[''] before:w-full before:h-[7px] before:absolute before:left-0 before:top-[77%] before:-rotate-[1deg] before:bg-secondaryGradient before:-z-10`}
            >
                {text}
            </h2>
        </div>
    )
}
