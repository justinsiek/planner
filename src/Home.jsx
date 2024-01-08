import { Link } from 'react-router-dom';

export default function Home() {

  return (
      <div className="relative text-3xl font-bold h-[637px] w-[937px]">
        <Link to="./tasks" target="_self" className="flex bg-[#BF89B7] h-full w-[28.7%] rounded-2xl justify-center items-center cursor-pointer">
          <p className="text-bone">tasks</p>
        </Link>
        <Link to="./notes" className="flex justify-center items-center bg-[#E0C9A6] top-0 absolute left-[30.9%] h-[38%] w-[28.7%] rounded-2xl cursor-pointer">
          <p className="text-bone">notes</p>
        </Link>
        <Link to="./calendar" className="flex justify-center items-center absolute right-0 top-0 w-[37.6%] h-[66.4%] bg-[#C3A6A6] rounded-2xl cursor-pointer">
          <p className="text-bone">calendar</p>
        </Link>
        <Link to="./timer" className="flex justify-center items-center absolute left-[30.9%] top-[41.5%] bg-[#CF8080] w-[28.7%] h-[24.9%] rounded-2xl cursor-pointer">
          <p className="text-bone">timer</p>
        </Link>
        <Link to="./moods" className="flex justify-center items-center absolute bg-[#A5C2DC] left-[30.9%] bottom-0 w-[41.9%] h-[30.1%] rounded-2xl cursor-pointer">
          <p className="text-bone">moods</p>
        </Link>
      <Link to="./habits" className="flex justify-center items-center absolute right-0 bottom-0 bg-[#96B78B] h-[30.1%] w-[24.8%] rounded-2xl cursor-pointer">
          <p className="text-bone">habits</p>
        </Link>
      </div>
  )
}