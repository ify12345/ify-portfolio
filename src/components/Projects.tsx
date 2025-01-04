import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import Image1 from '@/assets/images/breeza.png'
import Image2 from '@/assets/images/ogugu.png'
import Image3 from '@/assets/images/ma.png'
import Image6 from '@/assets/images/cent.png'
import GoSvg from './GoSvg'
import { Link } from 'react-scroll'


const web2Projects = [
  { imgSrc: Image1, link: 'https://labreeza.com/',title:'Breeza' },
  { imgSrc: Image2, link: 'https://www.ogugu.com.br/',title:'Ogugu' },
  { imgSrc: Image3, link: 'https://www.marketassist.co/market-deals',title:'Market Assist' },



]
const web3Projects = [
  { imgSrc: Image6, link: 'https://www.figma.com/design/O97Tbs5tTL9UAo7vcQDYnb/CENT-TG-Mini-App?node-id=0-1&p=f&t=X2R1qcOnvtLXGPi7-0',title:'CENT Mini-App' },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState<'Web' | 'App'>('Web')

  const handleCategoryChange = (category: 'Web' | 'App') => {
    setSelectedCategory(category)
  }

  // Choose the appropriate projects based on selected category
  const projectsToDisplay = selectedCategory === 'Web' ? web2Projects : web3Projects
  return (
    <div className="h-full lg:min-h-[100vh] pt-6 pb-10" id="projects">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">Selected Works👨🏽‍💻</h1>
        <Link to="about" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>

      <div className="flex flex-row justify-between items-center gap-[32px] px-4 lg:px-[120px] py-8">
        <button   onClick={() => handleCategoryChange('Web')} className="flex w-full justify-center items-center p-[10px] text-white text-sm lg:text-4xl">
          WEB
        </button>
        <button   onClick={() => handleCategoryChange('App')} className="flex w-full justify-center items-center p-[10px] text-white text-sm lg:text-4xl">
          MOBILE APP
        </button>
      </div>

      {/* Auto-Scrolling Section */}
      <div   className={`relative overflow-x-scroll w-full py-8 scrollbar-thin scrollbar-track-black/50 scrollbar-thumb-black ${
          selectedCategory === 'App' ? 'flex justify-center items-center lg:justify-start lg:items-start px-5 lg:mx-0 lg:px-[120px]' : 'px-0'
        }`}>
        <div className="scroll-container flex items-center gap-6 animate-scroll">
          {projectsToDisplay.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] lg:min-w-[588px] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imgSrc}
                alt={`Project ${index + 1}`}
                className="w-full h-[300px] lg:h-[588px] rounded-lg shadow-md"
              />
              <div className="w-full flex justify-between pt-[24px] items-center">
                <h2 className="text-sm lg:text-2xl font-bold text-white">{project.title}</h2>
                <a
                  className="flex items-center text-white text-sm lg:text-[16px] gap-3"
                  href={project.link}
                  target="_blank"
                >
                  View project <GoSvg />{' '}
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>

    
    </div>
  )
}
