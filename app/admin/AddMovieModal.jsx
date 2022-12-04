"use client";

import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Input from '../../components/Input';


export default function AddMovieModal({ setModalOpen, modalOpen }) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [screenNo, setScreenNo] = useState("");
    const [platinumPrice, setPlatinumPrice] = useState(0);
    const [goldPrice, setGoldPrice] = useState(0);
    const [silverPrice, setSilverPrice] = useState(0);
    const [startingDate, setStartingDate] = useState("");
    const [totalShows, setTotalShows] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [poster, setPoster] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [trailerLink, setTrailerLink] = useState("");


    function getAccessToken () {
        return process.env.WEB3STORAGE_TOKEN
      }
      
      function makeStorageClient () {
        return new Web3Storage({ token: getAccessToken() })
      }

    async function makeFileObjects (name,city,location) {
  
        const obj = { fname: `${name}`,
                      fdescription: `${description}`, 
                      fscreenNo: `${screenNo}`,
                      fplatinumPrice: `${platinumPrice}`,
                      fgoldPrice: `${goldPrice}`,
                      fsilverPrice: `${silverPrice}`,
                      fstartingDate: `${startingDate}`,
                      ftotalShows: `${totalShows}`,
                      ftimeSlot: `${timeSlot}`,
                      fposter: `${poster}`,
                      fthumbnail: `${thumbnail}`,
                      ftrailerLink: `${trailerLink}`
                    }
        const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
      
        const files = [
          new File([blob], 'xyz.json')
        ]
        return files
      }


    async function storeFiles () {
        const files= await makeFileObjects(name,description,screenNo,platinumPrice,goldPrice,silverPrice,startingDate,totalShows,timeSlot,poster,thumbnail,trailerLink);
        const client = makeStorageClient()
        const cid = await client.put(files,{wrapWithDirectory : false})
        console.log('stored files with cid:', cid)
        return cid
      }
  



    return (
        <div className='absolute top-0 left-0 w-screen h-screen z-20 transition flex justify-center items-center'>

            <div className='absolute top-0 left-0 bg-black/50 backdrop-blur-sm w-full h-full z-30' onClick={() => { setModalOpen(!modalOpen) }}></div>

            <div className="z-50 flex flex-col items-center px-[50px] py-[20px] gap-[50px] bg-primaryBg border-2 border-lightGray rounded-[20px] w-full mx-[150px]">

                <Heading text="List a movie" size="4xl" />


                <div className="flex flex-row items-start p-0 gap-[70px] w-full">
                    <div className="flex flex-col items-center justify-center p-0 gap-[30px] w-1/2">

                        <TextInputItem text="Name" name="name" value={name} setValue={setName} placeholder="Eg. Brahmāstra ...." />

                        <TextInputItem text="Description" name="description" value={description} setValue={setDescription} placeholder="Eg. BRAHMASTRA - the Trilogy ...." />

                        <TextInputItem text="ScreenNo" name="screenNo" value={screenNo} setValue={setScreenNo} placeholder="Eg. 5" />

                        <TextInputItem text="Platinum price" name="platinumPrice" value={platinumPrice} setValue={setPlatinumPrice} placeholder="Eg. 0.03 ETH" />

                        <TextInputItem text="Gold price" name="goldPrice" value={goldPrice} setValue={setGoldPrice} placeholder="Eg. 0.02 ETH" />

                        <TextInputItem text="Silver price" name="silverPrice" value={silverPrice} setValue={setSilverPrice} placeholder="Eg. 0.01 ETH" />

                    </div>


                    <div className="flex flex-col items-center justify-center p-0 gap-[30px] w-1/2">

                        <DateInputItem text="Starting Date" name="startingDate" value={startingDate} setValue={setStartingDate} placeholder="Eg. 2 Dec 2022" />

                        <TextInputItem text="Total shows" name="totalShows" value={totalShows} setValue={setTotalShows} placeholder="Eg. 20" />

                        <TimeInputItem text="Time slot" name="timeSlot" value={timeSlot} setValue={setTimeSlot} placeholder="10:00 - 11:00" />

                        <FileInputItem text="Poster" name="poster" value={poster} setValue={setPoster} placeholder="+ Upload image" />

                        <FileInputItem text="Thumbnail" name="thumbnail" value={thumbnail} setValue={setThumbnail} placeholder="+ Upload image" />

                        <TextInputItem text="Trailer link" name="trailerLink" value={trailerLink} setValue={setTrailerLink} placeholder="Eg. https://www.youtube.c..." />


                    </div>
                </div>

            </div>
        </div>
    )
}

const TextInputItem = ({ text, name, value, setValue, placeholder }) => {
    return (
        <div className="flex flex-row items-center p-0 gap-[20px] w-full">
            <p className="poppins font-medium text-lg text-white w-[20%]">{text}:</p>
            <Input
                type="text"
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-[80%]"
            />
        </div>
    )
}

const DateInputItem = ({ text, name, value, setValue, placeholder }) => {
    return (
        <div className="flex flex-row items-center p-0 gap-[20px] w-full">
            <p className="poppins font-medium text-lg text-white w-[20%]">{text}:</p>
            <Input
                type="text"
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-[80%]"
            />
        </div>
    )
}

const TimeInputItem = ({ text, name, value, setValue, placeholder }) => {
    return (
        <div className="flex flex-row items-center p-0 gap-[20px] w-full">
            <p className="poppins font-medium text-lg text-white w-[20%]">{text}:</p>
            <Input
                type="text"
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-[80%]"
            />
        </div>
    )
}

const FileInputItem = ({ text, name, value, setValue, placeholder }) => {
    return (
        <div className="flex flex-row items-center p-0 gap-[20px] w-full">
            <p className="poppins font-medium text-lg text-white w-[20%]">{text}:</p>
            <Input
                type="text"
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-[80%]"
            />
        </div>
    )
}