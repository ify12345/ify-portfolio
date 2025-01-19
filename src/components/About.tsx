import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'

import {
  FaLaravel,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiTailwindcss, SiNextdotjs,SiExpo } from 'react-icons/si'
import { Link } from 'react-scroll'



export default function About() {
  return (
    <div className="min-h-[100vh] lg:min-h-[100vh] py-6" id="about">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">About Me👷🏽‍♂️</h1>
        
        <Link to="experience" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>

      </div>
      <div className="flex items-center flex-col lg:flex-row  px-3 lg:px-[120px] gap-[24px] text-white xl:text-[40px] leading-[32px] xl:leading-[60px] py-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-[40px] ">
          <p className="max-w-[588px]">
            <span className="text-[#A192E4]">Hello!</span>My name is Nwakodo
             Ifeanyi. I'm a Frontend Engineer with a deep passion for JavaScript and all things web development.
          </p>
          <p className="text-base">
            Currently based in Lagos, Nigeria, I am a developer specializing in
            creating interactive user experiences. I've worked with software
            development teams and startups across health, Beauty and wellness,
            entertainment, and Ecommerce services.
          </p>
          <p className="text-base">
            Whether you're an entrepreneur, a small business owner, or a startup
            founder seeking a Frontend engineer, I'm excited to embark on this
            creative journey with you. Let's collaborate and bring your vision
            to life!.
            
          </p>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-3 items-center">
          {/* Column 1 */}
          <div className="flex flex-col justify-center items-center gap-6">
            <FaReact size={80} color="#61DAFB" />
            <FaLaravel size={80} color="#FF2D20" />
            <FaVuejs size={80} color="#42B883" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-center items-center gap-6">
            <SiTypescript size={80} color="#3178C6" />
            <IoLogoJavascript size={80} color="#F7DF1E" />
            <FaHtml5 size={80} color="#E34F26" />
            <FaCss3Alt size={80} color="#1572B6" />
            <SiExpo  size={80} color="#FFFFFF" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-center items-center gap-6">
            <FaGithub size={80} color="#FFFFFF" /> {/* GitHub icon in white */}
            <SiTailwindcss size={80} color="#06B6D4" />
            <SiNextdotjs size={80} color="#FFFFFF" />{' '}
            {/* Next.js icon in white */}
          </div>
        </div>
      </div>
    </div>
  )
}
