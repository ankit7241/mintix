"use client";

import React from 'react'
import Heading from '../../components/Heading'
import poster from '../../assets/brahmastra_poster.png'
import ticket from '../../assets/ticket_placeholder.png'
import screen from '../../assets/screen.svg'
import seat from '../../assets/seat.svg'
import star from'../../assets/star.svg'
import Image from 'next/image'

function Movie() {
  return (
    <div className="grid content-center px-16">
        <div className="grid grid-cols-2 place-content-around px-8">
            <div>
                <Image src={poster} alt="brahmastra poster"/>
            </div>
            <div className='pl-10'>
                <h1>Brahmāstra: Part One – Shiva</h1>
                <p>BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India`s first original universe The Astraverse. It is a new original cinematic universe inspired by deeply rooted concepts and tales from Indian history but set in the modern world, with epic storytelling of fantasy, adventure, good vs evil, love and hope; all told using cutting edge technology and never-seen-before visual spectacles.</p>
                <div className="grid grid-rows-1">
                    <Image src={star} />
                    <p>4.5/5</p>
                </div>
            </div>
        </div>

        <br/>

        <div className="grid grid-cols-2 gap-2 place-content-around">
            <div>
                <div>
                    <Heading text="1. Select show date & time" size="3xl"/>
                    <br/>
                    <div>
                        <div grid grid-cols-4 content-around>
                            <text>2 dec 2022 </text>
                            &nbsp;
                            <button
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    10-11
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    11-12
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    12-1
                            </button>
                        </div>
                        <div grid grid-cols-4 content-around>
                            <text>2 dec 2022 </text>
                            &nbsp;
                            <button
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    10-11
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    11-12
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    12-1
                            </button>
                        </div>
                        <div grid grid-cols-4 content-around>
                            <text>2 dec 2022 </text>
                            &nbsp;
                            <button
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    10-11
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    11-12
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    12-1
                            </button>
                        </div>
                        <div grid grid-cols-4 content-around>
                            <text>2 dec 2022 </text>
                            &nbsp;
                            <button
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    10-11
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    11-12
                            </button>
                            &nbsp;
                            <button 
                                style={{border: '1px solid #6A6A6A', borderRadius: '10px', width:"120px"}} 
                                className='bg-transparentGradient'>
                                    12-1
                            </button>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Heading text='2. Select your seats' size='3xl' />
                    <Image src={screen} alt='screen'/>
                    <Image src={seat} style={{background: "#3C775A"}}/>

                </div>
                
            </div>
        </div>
        <div>
            <div className='grid place-content-center'>
                <Heading text="3. Booking summary" size='3xl' />
            </div>
            <div className='grid grid-cols-2 place-content-around'>
                <div className='content-center'>
                    <Image src={ticket} />
                </div>
                <div>
                    <p>show date: 2 Dec 2022</p> 
                    <p>show timings: 10:00 - 11:00</p>
                    <p>theatre name: PVR VEGA Bengaluru</p>
                    <p>number of selected seats: 3</p>
                    <p>price per ticket: 0.01 ETH</p>
                    <p>subtotal: 0.01 x 3 = 0.03 ETH</p>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Movie