import * as React from 'react'
import { Link } from 'react-scroll'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import UpArrow from './UpArrow'

export default function Footer() {
  return (
    <div className="flex flex-col text-white px-4 lg:px-[120px] " id="footer">
      <div className="flex flex-col lg:flex-row items-center py-[10px] relative border-b border-white w-full justify-between gap-10 lg:gap-0">
        <div className="max-w-[593px] text-xl lg:text-[40px] lg:leading-[60px] font-[700]">
          Let's work on something great together!🤝
        </div>
        <div className="flex flex-col text-xl gap-[24px] lg:pr-[93px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ifeanyi-nwakodo-ba689a255/"
          >
            <FaLinkedin size={30} color="#0077B5" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/ifyy_"
          >
             <FaXTwitter size={30} color="#1DA1F2" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ify12345"
          >
             <FaGithub size={30} color="#fff" />
          </a>
          <a href="mailto:nwakodoifeanyi21@gmail.com">
            <FaEnvelope size={30} color="#EA4335" />
          </a>
        </div>
        <div className="absolute right-0 bottom-1">
          <Link to="home" className="cursor-pointer ">
            <UpArrow />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full justify-between py-10">
        <p>Thanks for visiting</p>
        <p>© 2024 Ifeanyi Nwakodo. All rights reserved.</p>
      </div>
    </div>
  )
}
