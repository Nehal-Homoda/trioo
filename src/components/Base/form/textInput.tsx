
'use client'
import React, { useState } from 'react'

export default function TextInput({label,placeholder,required}) {
    const [textInputValue,setTextInputValue]=useState('')
    const handleChangeInput=(event)=>{
        setTextInputValue(event.target.value)
        console.log(event.target.value)  
    }
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input value={textInputValue} onChange={handleChangeInput} type="text"  placeholder={placeholder} required={required} className='form-input'/>
    </div>
  )
}
