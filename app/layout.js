"use client";

import styles from '../styles/globals.css';
import Header from "../components/Header";
import Footer from '../components/Footer';



import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

export default function RootLayout({ children }) {

    const { chains, provider } = configureChains(
        [chain.polygonMumbai],
        [
            alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
            publicProvider()
        ]
    );

    const { connectors } = getDefaultWallets({
        appName: 'Mintix',
        chains
    });

    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider
    })

    return (
        <html>
            <head />
            <body>
                <WagmiConfig client={wagmiClient}>
                    <RainbowKitProvider
                        chains={chains}
                        modalSize="compact"
                        theme={darkTheme({
                            accentColor: 'linear-gradient(93.22deg, #F7C0EC 0.53%, #A7BDEA 100%), linear-gradient(93.22deg, #FF5137 0.53%, #FD16D5 100%)',
                            accentColorForeground: 'black',
                            borderRadius: 'medium',
                            fontStack: 'rounded',
                            overlayBlur: 'small',
                        })}>

                        <div className="bg-primaryBg max-w-screen overflow-x-hidden min-h-screen flex flex-col">
                            <Header />
                            <div className="flex-1">
                                {children}
                            </div>
                            <Footer />
                        </div>

                    </RainbowKitProvider>
                </WagmiConfig>
            </body>
        </html>
    )
}
