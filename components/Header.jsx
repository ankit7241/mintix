import React from 'react'
import Link from 'next/link';

import { ConnectButton } from '@rainbow-me/rainbowkit';


import Logo from "../assets/Logo.svg";
import LogoGlow from "../assets/LogoGlow.svg";
import Search from "../assets/Search.svg";

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center px-[50px] py-[10px] w-screen mb-[90px]">
            <Link href="/">
                <div className="flex flex-row items-center justify-center p-0 gap-[10px]">
                    <div className="relative flex items-center justify-center">
                        <img src={Logo.src} height="35px" alt="Mintix" />
                        <img src={LogoGlow.src} className="absolute h-[85px] w-[85px] max-w-[85px]" alt="Mintix" />
                    </div>
                    <div className="flex flex-col items-start p-0 ">
                        <p className="secondaryFont text-2xl font-bold leading-5 text-white">mintix</p>
                        <p className="PrimaryFont text-xs font-extralight leading-5 tracking-widest text-white">NFT movie ticketing solution</p>
                    </div>
                </div>
            </Link>


            <div className="flex flex-row items-center p-0 gap-[50px]">
                <div className="flex flex-row items-center p-0 gap-[20px]">
                    <Link href="/" className="font-primaryFont Poppins text-base font-extralight text-white">Home</Link>
                    <Link href="/" className="font-primaryFont Poppins text-base font-extralight text-white">My tickets</Link>
                    <Link href="/admin" className="font-primaryFont Poppins text-base font-extralight text-white">Admin</Link>
                </div>

                <img src={Search.src} height="20px" width="20px" alt="Search" />

            </div>

            <ConnectButton />

        </div>
    )
}
