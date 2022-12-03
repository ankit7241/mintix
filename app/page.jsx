import Head from 'next/head'
import Heading from '../components/Heading'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="grid content-center px-16">
            <Head>
                <title>Mintix</title>
                <meta name="description" content="Mintix - NFT movie ticketing solution" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid place-content-center'>
                <div
                    style={{fontFamily: 'Space Grotesk'}}
                    className='grid content-center justify-center text-5xl font-bold'
                >EXTRAORDINARY</div>
                <div
                    style={{fontFamily: 'Space Grotesk'}}                    
                    className='grid content-center justify-center text-5xl font-bold'                >
                    <small style={{textAlign:"center", background: "linear-gradient(93.22deg, #F7C0EC 0.53%, #A7BDEA 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent", "background-clip": "text", "text-fill-color": "transparent"}}>NFT Tickets</small>
                </div>
                <div
                style={{fontFamily: 'Space Grotesk'}}                    
                className='grid content-center justify-center text-5xl font-bold'>you’ll love</div>
                <br/>
                <div
                style={{fontFamily: 'Space Grotesk'}}                    
                className='grid content-center justify-center text-sm font-lightu'
                >
                Book movie tickets as NFTs and own your seat for the show 
                </div>
            </div>
            <br/>
            <div className='flex justify-center'>
                <Heading text='How It Works?' size='xl'/>
            </div>
            <br/>
            <div className='grid grid-cols-2'>
                <div style={{fontFamily: 'Space Grotesk'}}>
                    {/* <div> */}
                    <div className='grid content-start justify-start text-xl font-bold'>
                        Select your Seats
                    </div>
                    <div className='grid text-sm'>
                        Select the most comfortable seat according to your budget and preferences, to enjoying the movie throught.
                    </div>
                    {/* </div> */}
                    <div>
                        <Image src='../assets/home_1.png' alt='pic1'/>
                    </div>    
                </div>
                <div>
                    <div className='grid content-start justify-start text-xl font-bold'>
                        Pay using your crypto wallet
                    </div>
                    <div className='grid text-sm'>
                        Select the most comfortable seat according to your budget and preferences, to enjoying the movie throught.
                    </div>
                    <div>
                        {/* <Image src='../assets/home_2.png' alt='pic2' width='350px'/> */}
                    </div>
                </div>
                <div>
                    <div className='grid content-start justify-start text-xl font-bold'>
                        Get your seat minted as an NFT
                    </div>
                    <div className='grid text-sm'>
                        Select the most comfortable seat according to your budget and preferences, to enjoying the movie throught.
                    </div>
                    <div>
                        {/* <Image src='../assets/home_2.png' alt='pic2' width='350px'/> */}
                    </div>
                </div>
                <div>
                    <div className='grid content-start justify-start text-xl font-bold'>
                        Scan the QR and verify your ticket
                    </div>
                    <div className='grid text-sm'>
                        Select the most comfortable seat according to your budget and preferences, to enjoying the movie throught.
                    </div>
                    <div>
                        <Image src='../assets/home_2.png' alt='pic2'/>
                    </div>
                </div>
                <div>

                </div>
                <div></div>
            </div>
        </div>
    )
}
