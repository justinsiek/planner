import React from 'react'
import { useState } from 'react'

export default function Notes() {
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState([])
    const [text, setText] = useState('')
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleSaveClick = () => {
        setNotes([...notes, [title, text]])
        setTitle('')
        setText('')
    }
    
    return (
        <>
            <div className="relative h-[637px] w-[937px]">
                <div className='absolute w-[25%] h-full rounded-2xl outline-offset-2'>
                    <div className='flex flex-col'>
                        {notes.map((note, index) => (
                            <Note key={index} content={note[0]} />
                        ))}
                    </div>
                </div>

                <div className='absolute flex flex-col ml-[27%] justify-center items-center w-[75%] h-full bg-[#E0C9A6] rounded-2xl'>
                    <input name="" id="" value={title}
                    className=' mx-8 w-[90%] h-[80px] text-3xl font-bold outline-none resize-none bg-transparent text-bone placeholder-bone border-b-2 border-bone' placeholder='Title...' 
                    onChange={handleTitleChange} maxLength={38}></input>
                    <textarea name="" id="" cols="30" rows="10" value={text} className='bg-transparent w-[90%] h-[73%] text-md outline-none resize-none text-bone' onChange={handleTextChange}></textarea>
                    <div className="w-[70px] h-[40px] bg-bone flex items-center justify-center mt-4 rounded-full cursor-pointer" onClick={handleSaveClick}>Save</div> 
                    
                </div>
            </div>
        </>
  )
  
function Note({ content }) {
        return (
            <div className="w-full h-[80px] bg-[#CAB18B] rounded-2xl flex justify-center items-center mb-1 p-2 text-center text-bone text-xl font-bold">
                <p className="break-words">{content}</p>
            </div>
        )
    }
}
