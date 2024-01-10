import React from 'react'

export default function Tasks() {
  return (
    <div className="relative h-[637px] w-[937px]">
      <div className="flex bg-[#C09ABA] h-full w-[33.7%] rounded-2xl 
      justify-center">
          <p className="text-bone mt-5 text-xl">Routine Tasks</p>
      </div>
      <div className="absolute flex flex-col-reverse bg-[#9A7B95] right-0 bottom-0 h-full w-[25.6%] 
      rounded-2xl justify-end items-center">
        <textarea name="" id="" cols="30" rows="10" className='mt-2 bg-transparent w-[90%] 
        h-[73%] text-md resize-none text-bone' ></textarea>
        <input type="text" placeholder='Title' className="mt-2"/>
        <p className="text-bone mt-5 text-xl ">Add a Task</p>
        
      </div>
      <div className="flex bg-[#C09ABA] absolute right-[28%] 
      top-0 h-[48.2%] w-[35.6%] rounded-2xl justify-center ">
        <p className="text-bone mt-5 text-xl">One Time Tasks</p>
      </div>
      <div className="flex bg-[#C09ABA] absolute right-[28%] 
      bottom-0 h-[48.2%] w-[35.6%] rounded-2xl justify-center ">
        <p className="text-bone mt-5 text-xl">Upcoming Tasks</p>
      </div>
      <div className="flex bg-[#C09ABA] absolute right-[3.99%] 
      bottom-[3.99%] h-[19%] w-[17.7%] rounded-2xl justify-center items-center cursor-pointer">
        <i class="fa-solid fa-plus fa-3x text-bone"></i>
      </div>
    </div>
  )
}
