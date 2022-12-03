import React from 'react'
import Link from 'next/link';

import Logo from "../assets/Logo.svg";
import LogoGlow from "../assets/LogoGlow.svg";
import Twitter from "../assets/Twitter.svg";
import Linkedin from "../assets/Linkedin.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";

export default function Footer() {
    return (
        <div className="w-[calc(100vw-200px)] mx-[100px] flex flex-row items-center justify-between p-0 gap-[10px] mt-[50px] mb-[25px] box-border pt-[30px] border-t-2 border-t-darkGray">
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

            <p className="SpaceGrotesk font-mediuim text-sm text-center text-darkGray">Built by amazing peeps. All rights reserved.</p>

            <div className="flex flex-row items-start p-0 gap-[30px]">
                <img src={Twitter.src} width={Twitter.width} height={Twitter.height} className="hover:color-blue-500" />
                <img src={Linkedin.src} width={Linkedin.width} height={Linkedin.height} className="hover:color-blue-500" />
                <img src={Instagram.src} width={Instagram.width} height={Instagram.height} className="hover:color-blue-500" />
                <img src={Facebook.src} width={Facebook.width} height={Facebook.height} className="hover:color-blue-500" />
            </div>
        </div>
    )
}
