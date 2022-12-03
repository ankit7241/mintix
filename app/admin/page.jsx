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
                    ? address === "0xbdfC42145aF525009d3eE7027036777Ed96BF6A4"
                        ? <Registered />
                        : <NotRegistered />
                    : <p className="text-4xl font-bold text-white h-full w-full text-center">Please connect your wallet</p>
            }
        </>
    )
}