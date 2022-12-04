"use client";

import React from 'react';
import { useAccount } from "wagmi";

import NotRegistered from './NotRegistered';
import Registered from './Registered';

export default function Admin() {

    const { isConnected, address } = useAccount();

    return (
        <>
            {
                isConnected
                    ? address === "0x61B8A9baFda51De880254d509Aa6B3f12920df25"
                        ? <Registered />
                        : <NotRegistered />
                    : <p className="text-4xl font-bold text-white h-full w-full text-center">Please connect your wallet</p>
            }
        </>
    )
}