import React from 'react'

import Image from "next/image";
import Thumbnail from "../assets/Thumbnail.png"
import Star from "../assets/Star.svg"

export default function MovieCard() {
    return (
        <div className="flex flex-row justify-center items-center p-[15px] gap-[10px] bg-transparentGradient border border-darkGray rounded-[20px] w-[230px]">
            <div className="flex flex-col justify-center items-center gap-[10px]">
                <Image
                    src={Thumbnail.src}
                    width="200"
                    height="300"
                    className="rounded-[15px]"
                />

                <p className="poppins text-white text-base font-bold w-[200px] max-w-[200px] inline-block truncate">Brahmāstra: Part One – Shiva</p>

                <div className="flex flex-row justify-between items-center p-0 gap-[10px] w-full">
                    <p className="w-1/2 poppins font-medium text-base text-lightGray">0.01 ETH</p>
                    <div className="flex flex-row gap-[7px] items-center justify-center">
                        <img src={Star.src} height={Star.height} width={Star.width} />
                        <p className="poppins font-medium text-lg text-white">4.5<span className="text-darkGray text-xs"> /5</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}