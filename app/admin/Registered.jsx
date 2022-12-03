"use client";

import React, { useState, useEffect } from 'react';
import AddCircle from "../../assets/AddCircle.svg"
import Heading from '../../components/Heading';
import MovieCard from '../../components/MovieCard';
import AddMovieModal from "./AddMovieModal";

export default function Registered() {

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.maxHeight = '100vh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.maxHeight = 'unset';
        }
    }, [modalOpen]);

    return (
        <div className="flex flex-col items-start p-0 gap-[50px] px-[50px]">

            {
                modalOpen
                    ? <AddMovieModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
                    : null
            }

            <div className="flex flex-row items-center p-0 gap-[50px] w-full">
                <p className="SpaceGrotesk font-bold text-white text-5xl ">Hey admin 👋</p>

                <div
                    className="flex flex-row items-center p-0 gap-[15px]"
                    onClick={() => { setModalOpen(!modalOpen) }}
                >
                    <img src={AddCircle.src} height={AddCircle.height} width={AddCircle.width} />
                </div>
            </div>

            <div className="flex flex-col items-start p-0 gap-[30px]">
                <Heading text="View your active shows" size="2xl" />
                <div className="flex flex-row justify-center items-center p-0 gap-[50px]">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>

            <div className="flex flex-col items-start p-0 gap-[30px]">
                <Heading text="View your past shows" size="2xl" />
                <div className="flex flex-row justify-center items-center p-0 gap-[50px]">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>


        </div>
    )
}

