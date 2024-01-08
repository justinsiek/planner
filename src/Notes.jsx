import React from 'react'
import { useState } from 'react'

export default function Notes() {
    const [text, setText] = useState('')
    const [notes, setNotes] = useState([])
    
    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSaveClick = () => {
        setNotes([...notes, text])
    }
    
    return (
        <>
            <div className="relative text-3xl font-bold h-[637px] w-[937px] bg-red-100">
                <div className='absolute w-[25%] h-full bg-yellow-200'>

                </div>

                <div className='absolute left-[25%]  w-[75%] h-full bg-green-100'>
                    <textarea name="" id="" cols="2" 
                    rows="2"
                    onChange={handleChange}></textarea>
                    <button className="" onClick={handleSaveClick}>Save</button> 
                    <div className='flex'>
                        {notes.map((note, index) => (
                            <Note key={index} content={note} />
                        ))}
                    </div>
                </div>
            </div>
        </>
  )
  
function Note({ content }) {
        return (
            <div className="w-[300px] h-[300px] bg-blue-100 rounded-2xl flex justify-center items-center">
                <p>{content}</p>
            </div>
        )
    }
}
