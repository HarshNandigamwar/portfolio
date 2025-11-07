"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiLogoGithub, BiGlobe } from "react-icons/bi";
import ScaleOnView from "@/components/ScaleOnView";

type Project = {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce app",
    description:
      " This is a FullStack E-Commerce web application built with React.js & Firebase designed to deliver a smooth and engaging shopping experience.",
    images: [
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028463/Ecom1_tdmejk.png",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028482/Ecom2_gqko9l.png",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028459/Ecom3_vrkhk8.png",
    ],
    techStack: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "DummyJSON API",
      "Axios",
      "Motion",
    ],
    github: "https://github.com/HarshNandigamwar/SigmaMart",
    live: "https://sigma-mart.vercel.app",
  },
  {
    title: "Weather app",
    description:
      "Check the weather forecast anytime anywhere. Get accurate and up-to-date weather updates for your location.",
    images: [
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028369/weather1_uu4lnb.png",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028353/weather2_ygfct9.png",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028344/weather3_jqtyt7.jpg",
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "Weather API"],
    github: "https://github.com/HarshNandigamwar/Weather-App",
    live: "https://weather-app-shriharsh.netlify.app",
  },
  {
    title: "Currency Converter",
    description:
      "Quickly convert currencies on-the-go Get up-to-date exchange rates for countries worldwide.",
    images: [
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028182/Currency_Converter1_cu1e9i.jpg",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028243/Currency_Converter2_xi1lkh.png",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028249/Currency_Converter3_ivvhfx.png",
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "Currency API"],
    github: "https://github.com/HarshNandigamwar/Currency-Converter",
    live: "https://shriharsh-currency-converter.netlify.app",
  },
  {
    title: "Sigma AI",
    description:
      " It Is A smart and interactive chatbot designed to provide quick, accurate, and engaging responses to users.",
    images: [
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028076/sigma_ai1_kg5tpj.jpg",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028076/Sigma_AI2_e5uchs.png",
      "https://res.cloudinary.com/darmatnf2/image/upload/v1761028080/Sigma_AI3_t3ljgh.png",
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "Gemini API"],
    github: "https://github.com/HarshNandigamwar/Sigma-AI",
    live: "https://sigma-ai-by-shriharsh.netlify.app",
  },
];

export default function PortfolioProjects() {
  return (
    <section id="project" className="py-16 px-2 md:px-6 w-full pt-15">
      <h2 className="text-center font-mono text-5xl md:text-6xl text-purple-400 font-semibold">
        My Projects
      </h2>
      <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <ScaleOnView>
      <motion.div className="bg-purple-900/20 border border-purple-400 rounded-md shadow-lg overflow-hidden group hover:shadow-purple-400/40 transition-all">
        {/* Image */}
        <div className="w-full h-56 overflow-hidden">
          <motion.img
            key={currentImage}
            src={project.images[currentImage]}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
        {/* Info */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">
            {project.title}
          </h3>
          {/* Description */}
          <p className="text-gray-300 mb-4">{project.description}</p>
          {/* TechStack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="border border-purple-400 bg-purple-900/20 text-purple-300 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Github & Live Button */}
          <div className="flex items-center gap-4">
            {/* Github */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50%] border border-purple-400 flex p-2 items-center gap-2 rounded-md text-xl  md:text-2xl justify-center font-mono bg-purple-900/20 transform transition-transform duration-300 hover:scale-105 hover:bg-purple-400/20 hover:text-purple-400  "
            >
              <BiLogoGithub size={25} /> GitHub
            </a>
            {/* Live */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50%] border border-purple-400 flex p-2 items-center gap-2 rounded-md text-xl  md:text-2xl justify-center font-mono bg-purple-900/20 transform transition-transform duration-300 hover:scale-105 hover:bg-purple-400/20 hover:text-purple-400  "
            >
              <BiGlobe size={25} /> Live
            </a>
          </div>
        </div>
      </motion.div>
    </ScaleOnView>
  );
}
