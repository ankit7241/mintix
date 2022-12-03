import React from 'react'

export default function Input({ type, name, value, onChange, placeholder }) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex flex-row items-start px-[15px] py-[10px] gap-[10px] w-[90%] bg-white/5 border border-white/5 rounded-[10px] outline-none text-white" />
    )
}
