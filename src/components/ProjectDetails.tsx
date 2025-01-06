import { useParams } from 'react-router-dom';

// Sample project data
const allProjects = [
  { id: 'breeza', imgSrc: 'path/to/image1', link: 'https://labreeza.com/', title: 'Breeza' },
  { id: 'ogugu', imgSrc: 'path/to/image2', link: 'https://www.ogugu.com.br/', title: 'Ogugu' },
  { id: 'market-assist', imgSrc: 'path/to/image3', link: 'https://www.marketassist.co/market-deals', title: 'Market Assist' },
  { id: 'cent-mini-app', imgSrc: 'path/to/image6', link: 'https://www.figma.com', title: 'CENT Mini-App' },
];

export default function ProjectDetails() {
  const { projectId } = useParams();

  // Find the project based on its ID
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="h-full p-6 text-white">Project not found!</div>;
  }

  // Define specific views for certain project IDs
  if (projectId === 'breeza') {
    return (
      <div className="h-full p-6 text-white">
        <h1 className="text-3xl font-bold">Welcome to Breeza</h1>
        <p className="mt-4 text-lg">This is a custom view for Breeza.</p>
        <img src={project.imgSrc} alt={project.title} className="rounded-lg shadow-lg mt-4" />
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Visit Breeza
        </a>
      </div>
    );
  }

  if (projectId === 'ogugu') {
    return (
      <div className="h-full p-6 text-white">
        <h1 className="text-3xl font-bold">Ogugu: Your Trusted Partner</h1>
        <p className="mt-4 text-lg">Experience the best with Ogugu.</p>
        <img src={project.imgSrc} alt={project.title} className="rounded-lg shadow-lg mt-4" />
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Visit Ogugu
        </a>
      </div>
    );
  }

  if (projectId === 'market-assist') {
    return (
      <div className="h-full p-6 text-white">
        <h1 className="text-3xl font-bold">Market Assist Deals</h1>
        <p className="mt-4 text-lg">Find the best market deals with Market Assist.</p>
        <img src={project.imgSrc} alt={project.title} className="rounded-lg shadow-lg mt-4" />
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Explore Market Deals
        </a>
      </div>
    );
  }

  // Default view for projects without specific customization
  return (
    <div className="h-full p-6 text-white">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img src={project.imgSrc} alt={project.title} className="rounded-lg shadow-lg mt-4" />
      <p className="mt-4 text-lg">Check out the project here:</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        {project.link}
      </a>
    </div>
  );
}
