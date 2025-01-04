import * as React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import { IoMail } from 'react-icons/io5'
import Logo from '@/assets/images/logo.png'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  // Function to handle link clicks
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <main
      className="bg-[url('assets/images/grid-layer.png')] bg-cover bg-no-repeat bg-center relative z-30 text-white pb-14 h-full lg:h-[700px]"
      id="home"
    >
      <header className="h-24 top-0 w-full flex items-center text-white ">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-[120px] w-full flex items-center justify-between relative z-40">
          {/* <a href="/">
            <img src={Logo} width={220} height={58} alt="kay-bams" />
          </a> */}

          <div className="hidden lg:flex items-center gap-[20px]">
            <button className="border border-[#55DB62] flex items-center py-[8px] px-[16px] gap-[8px] rounded-[40px]">
              <div className="bg-[#55DB62] size-[16px] rounded-full"></div>
              <h1 className="text-[#55DB62]">Available</h1>
            </button>
            <h1 className="">Developer</h1>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoCloseSharp size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-black bg-opacity-90 flex flex-col items-center z-30 pt-[100px] lg:pt-[150px] absolute inset-0 w-full px-4 lg:px-0">
            <div className="max-w-screen-2xl mx-auto lg:px-[120px] w-full flex items-center justify-between">
              <div className=""></div>
              <div className="flex flex-col">
                <ul className="text-white text-center space-y-8 text-2xl">
                  <li className="flex items-end justify-end">
                    <Link
                      className="cursor-pointer"
                      to="about"
                      smooth={true}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      About Me
                    </Link>
                  </li>
                  <li className="flex items-end justify-end">
                    <Link
                      className="cursor-pointer"
                      to="projects"
                      smooth={true}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="flex items-end justify-end">
                    <a
                      className="cursor-pointer"
                      target='_blank'
                      href=""
                      onClick={handleLinkClick}
                    >
                      My Resume
                    </a>
                  </li>
                  <li className="flex items-end justify-end">
                    <a
                      className="cursor-pointer"
                      target='_blank'
                      href="https://github.com/ify12345"
                      onClick={handleLinkClick}
                    >
                     GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="mt-4 mx-auto w-full flex justify-center items-center flex-col px-4 lg:px-0">
        <div className="flex flex-col max-w-[1200px] pt-[50px]">
          <p className="text-[24px] lg:text-[64px] lg:leading-[96px] lg:-tracking-[1.5%] text-center">
            Ifeanyi -{' '}
            <span className="text-[#A192E4]">
             
            Frontend Engineer
            </span>
          </p>
          <p className="text-center text-sm lg:text-[24px] leading-[36px]">
          Developer creating <span className='text-[#A192E4]'>web</span> and <span className='text-[#A192E4]'>mobile</span> apps, collaborating with startup founders and teams to solve complex problems creatively.
          </p>
        </div>

        <a
          href="mailto:nwakodoifeanyi21@gmail.com"
          className="bg-white rounded-[40px] flex gap-2 lg:gap-4 items-center lg:py-[16px] p-2 lg:px-[24px] mt-[60px]"
        >
          <IoMail color="#A192E4" size={24} />
          <p className="text-black text-sm lg:text-[24px] leading-[36px] font-[500]">
            nwakodoifeanyi21@gmail.com
          </p>
        </a>
      </div>
    </main>
  )
}
