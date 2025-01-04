import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-scroll'



export default function Experience() {
  return (
    <div className="min-h-[100vh] lg:min-h-[100vh] py-6" id="experience">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">Experience</h1>
        <Link to="footer" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>



  
      <div className="flex flex-col px-4 lg:px-[120px] gap-[40px] py-[64px]">
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Diagnostar</p>
                <p className="text-base">Software Developer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2023 till Present</p>
        </div>
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Techagwa</p>
                <p className="text-base">Frontend Developer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2022</p>
        </div>
       
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Ehizua Hub</p>
                <p className="text-base">Frontend Developer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2020</p>
        </div>

        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Revas Exchange(freelance)</p>
                <p className="text-base">Software Developer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2020 till present</p>
        </div>
       
      </div>

    
    </div>
  )
}
