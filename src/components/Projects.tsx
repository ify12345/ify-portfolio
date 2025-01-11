import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import Image1 from '@/assets/images/breeza.png'
import Image2 from '@/assets/images/ogugu.png'
import Image3 from '@/assets/images/ma.png'
import Image4 from '@/assets/images/sd.png'
import Image5 from '@/assets/images/breeza-app.jpg'
import GoSvg from './GoSvg'
import { Link } from 'react-scroll'

const web2Projects = [
  {
    id: 'breeza',
    imgSrc: Image1,
    link: 'https://labreeza.com/',
    title: 'Breeza',
    overview:'Breeza is a U.S.-based beauty and wellness platform connecting customers with professionals for services like spa treatments, haircuts, and yoga. It enables experts to manage schedules and appointments, whether venue-based or at-home. Built with Laravel, Vue.js, and TailwindCSS, it ensures a seamless booking experience.'

  },
  {
    id: 'ogugu',
    imgSrc: Image2,
    link: 'https://www.ogugu.com.br/',
    title: 'Ogugu',
    overview:'Ogugu, built with Vue, Laravel, Bootstrap, and HTML, is a multilingual online learning platform. It enables tutors to create courses, empowering individuals to learn new skills and upskill effectively. The platform fosters global educational connections through accessible and diverse content.'
  },
  {
    id: 'market-assist',
    imgSrc: Image3,
    link: 'https://www.marketassist.co/market-deals',
    title: 'Market Assist',
    overview:'Market Assist, built with Next.js and TailwindCSS, is an e-commerce platform serving three major markets in Lagos. It allows users to request reliable and affordable runners to pick up purchased items and deliver them safely to their homes. The platform ensures a seamless, convenient shopping experience for customers in Lagos.'
  },
  {
    id: 'student-deal',
    imgSrc: Image4,
    link: 'https://studentdeal.co/',
    title: 'Student deal',
    overview:'Student Deal is a platform that provides opportunities for students to secure visas for studying anywhere globally. Built with React and Material UI, it simplifies the application process, connecting students with essential resources and guidance. The platform offers a seamless user experience, empowering students to explore educational opportunities worldwide.'
  },
]

const web3Projects = [
  {
    id: 'Breeza App',
    imgSrc: Image5,
    link: 'https://apps.apple.com/ng/app/breeza-simply-stand-out/id6736651658',
    title: 'Breeza App',
    overview:'The Breeza mobile app mirrors the functionality of the Breeza web platform, offering a seamless experience for booking beauty and wellness services. Built with React Native and Expo, it allows users to schedule and manage appointments with professionals for services like haircuts, spa treatments, and yoga. The app ensures a user-friendly, on-the-go solution for both customers and beauty professionals.'
  },
]
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState<'Web' | 'App'>(
    'Web'
  )

  const handleCategoryChange = (category: 'Web' | 'App') => {
    setSelectedCategory(category)
  }

  // Choose the appropriate projects based on selected category
  const projectsToDisplay =
    selectedCategory === 'Web' ? web2Projects : web3Projects
  return (
    <div className="h-full lg:min-h-[100vh] pt-6 pb-10" id="projects">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">Selected Works👨🏽‍💻</h1>
        <Link to="about" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>

      <div className="flex flex-row justify-between items-center gap-[32px] px-4 lg:px-[120px] py-8">
        <button
          onClick={() => handleCategoryChange('Web')}
          className="flex w-full justify-center items-center p-[10px] text-white text-sm lg:text-4xl"
        >
          WEB
        </button>
        <button
          onClick={() => handleCategoryChange('App')}
          className="flex w-full justify-center items-center p-[10px] text-white text-sm lg:text-4xl"
        >
          MOBILE APP
        </button>
      </div>

      {/* Auto-Scrolling Section */}
      <div
        className={`relative overflow-x-scroll w-full py-8 scrollbar-thin scrollbar-track-black/50 scrollbar-thumb-black ${
          selectedCategory === 'App'
            ? 'flex justify-center items-center lg:justify-start lg:items-start px-5 lg:mx-0 lg:px-[120px]'
            : 'px-8'
        }`}
      >
        <div className="scroll-container flex items-center gap-6 animate-scroll">
          {projectsToDisplay.map((project, index) => (
            <a
              key={index}
              href={`${project.link}`}
              target="_blank"
              className="relative group w-[500px]  lg:max-w-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imgSrc}
                alt={`Project ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-center text-sm font-normal ">
                  {`${project.overview} - Click to visit!`}
                </p>
              </div>
              <div className="w-full flex justify-between pt-[24px] items-center">
                <h2 className="text-sm lg:text-2xl font-bold text-white">
                  {project.title}
                </h2>
                <span className="flex items-center text-white text-sm lg:text-[16px] gap-3">
                  View project <GoSvg />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
