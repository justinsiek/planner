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
            <textarea name="" id="" cols="30" 
            rows="10"
            onChange={handleChange}></textarea>
            <button className="" onClick={handleSaveClick}>Save</button> 
            {notes.map((note, index) => (
                <Note key={index} content={note} />
            ))}
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
