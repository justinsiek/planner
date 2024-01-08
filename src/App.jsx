export default function App() {
  return (
    <div className="relative text-3xl font-bold h-[637px] w-[937px]">
      <div className="flex bg-[#BF89B7] h-full w-[28.7%] rounded-2xl justify-center items-center">
        <p className="text-bone">tasks</p>
      </div>
      <div className="flex justify-center items-center bg-[#E0C9A6] top-0 absolute left-[30.9%] h-[38%] w-[28.7%] rounded-2xl">
        <p className="text-bone">notes</p>
      </div>
      <div className="flex justify-center items-center absolute right-0 top-0 w-[37.6%] h-[66.4%] bg-[#C3A6A6] rounded-2xl">
        <p className="text-bone">calendar</p>
      </div>
      <div className="flex justify-center items-center absolute left-[30.9%] top-[41.5%] bg-[#CF8080] w-[28.7%] h-[24.9%] rounded-2xl">
        <p className="text-bone">timer</p>
      </div>
      <div className="flex justify-center items-center absolute bg-[#A5C2DC] left-[30.9%] bottom-0 w-[41.9%] h-[30.1%] rounded-2xl">
        <p className="text-bone">moods</p>
      </div>
      <div className="flex justify-center items-center absolute right-0 bottom-0 bg-[#96B78B] h-[30.1%] w-[24.8%] rounded-2xl">
        <p className="text-bone">habits</p>
      </div>
    </div>
  )
}