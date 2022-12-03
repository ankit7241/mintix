"use client";

import React, { useState } from 'react'

import GradientButton from "../../components/GradientButton"

export default function Admin() {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className="flex flex-col items-center p-0 gap-[50px]">
            <div className="relative z-20">
                <h2
                    className="SpaceGrotesk font-bold text-5xl text-white before:content-[''] before:w-full before:h-[7px] before:absolute before:left-0 before:top-[77%] before:-rotate-[1deg] before:bg-secondaryGradient before:-z-10"
                >
                    List your theater
                </h2>
            </div>


            <div className="flex flex-col justify-center items-center p-0 gap-[30px] w-[50%]">
                <div className="flex flex-rpw items-center p-0 gap-[20px] w-full">
                    <p className="Poppins font-medium text-xl text-white w-[10%]">Name:</p>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Eg. PVR VEGA Bengaluru ....'
                        className="flex flex-row items-start px-[15px] py-[10px] gap-[10px] w-[90%] bg-white/5 border border-white/5 rounded-[10px] outline-none text-white" />
                </div>
                <div className="flex flex-rpw items-center p-0 gap-[20px] w-full">
                    <p className="Poppins font-medium text-xl text-white w-[10%]">City:</p>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Eg. Bangalore"
                        className="flex flex-row items-start px-[15px] py-[10px] gap-[10px] w-[90%] bg-white/5 border border-white/5 rounded-[10px] outline-none text-white" />
                </div>
                <div className="flex flex-rpw items-center p-0 gap-[20px] w-full">
                    <p className="Poppins font-medium text-xl text-white w-[10%]">Location:</p>
                    <input
                        type="text"
                        name="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Eg. PVR Cinemas, Vega City ...."
                        className="flex flex-row items-start px-[15px] py-[10px] gap-[10px] w-[90%] bg-white/5 border border-white/5 rounded-[10px] outline-none text-white" />
                </div>
            </div>

            <GradientButton Text="Submit" px="50px" py="10px" />


        </div>
    )
}