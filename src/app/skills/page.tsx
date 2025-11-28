import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaNetworkWired,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const skills = () => {
  const frontendSkills = [
    {
      name: "HTML",
      logo: <FaHtml5 color="#E34F26" className="h-6 w-6" />,
    },
    {
      name: "CSS",
      logo: <FaCss3 color="#1572B6" className="h-6 w-6" />,
    },
    {
      name: "JavaScript",
      logo: <IoLogoJavascript color="#fdc700" className="h-6 w-6" />,
    },
    {
      name: "TypeScript",
      logo: <SiTypescript color="#2b7fff" className="h-6 w-6" />,
    },
    {
      name: "NextJS",
      logo: <RiNextjsFill className="h-6 w-6" />,
    },
    {
      name: "React.js",
      logo: <FaReact color="#51a2ff" className="h-6 w-6" />,
    },
    {
      name: "Redux Toolkit",
      logo: <SiRedux color="#8200db" className="h-6 w-6" />,
    },
    {
      name: "Tailwind CSS",
      logo: <RiTailwindCssFill color="#00d3f3" className="h-6 w-6" />,
    },
  ];
  const backendSkills = [
    {
      name: "Node.js",
      logo: <FaNodeJs color="#00c951" className="h-6 w-6" />,
    },
    {
      name: "Express.js",
      logo: <SiExpress color="#6a7282" className="h-6 w-6" />,
    },
    {
      name: "MongoDB",
      logo: <SiMongodb color="#00a63e" className="h-6 w-6" />,
    },
    {
      name: "Mongoose",
      logo: (
        <img
          src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
          className="w-[30px] md:w-[35px]"
          loading="lazy"
        />
      ),
    },
    {
      name: "Firebase",
      logo: <SiFirebase color="#FF9100" className="h-6 w-6" />,
    },
    {
      name: "REST API",
      logo: <FaNetworkWired color="#06B6D4" className="h-6 w-8" />,
    },
  ];
  const tools = [
    {
      name: "Git",
      logo: <FaGitAlt color="#ff6900" className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      logo: <FaGithub color="#ffffff" className="h-6 w-6" />,
    },
    {
      name: "Postman",
      logo: (
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
          className="h-6 w-6"
          loading="lazy"
        />
      ),
    },
    {
      name: "Thunder Client",
      logo: (
        <img
          src="/images/thunderClinet.png"
          className="h-7 w-8"
          loading="lazy"
        />
      ),
    },
    {
      name: "VS Code",
      logo: <VscVscode color="#007ACC" className="h-6 w-6" />,
    },
    {
      name: "Vercel",
      logo: (
        <img
          src="https://skillicons.dev/icons?i=vercel"
          className="h-6 w-6"
          loading="lazy"
        />
      ),
    },
    {
      name: "Netlify",
      logo: (
        <img
          src="https://skillicons.dev/icons?i=netlify"
          className="h-6 w-6"
          loading="lazy"
        />
      ),
    },
  ];
  return (
    <div id="skills" className=" w-full pt-15">
      <h2 className="text-center font-mono text-5xl md:text-6xl text-[#51a2ff] font-semibold">
        Skills & technologies
      </h2>
      <div className="mt-10 p-2 md:px-20 flex flex-col gap-10">
        {[
          { title: "Frontend", skills: frontendSkills },
          { title: "Backend", skills: backendSkills },
          { title: "Tools", skills: tools },
        ].map((section, idx) => (
          <div className="p-3 flex flex-col gap-4 px-3 md:px-5" key={idx}>
            <h1 className="text-3xl md:text-5xl font-mono font-semibold text-[#51a2ff]">
              {section.title}
            </h1>
            <div className="flex pr-1 gap-5 md:gap-6 flex-wrap w-screen ">
              {section.skills.map((data) => (
                <div
                  className="border border-[#0a2473] bg-[#51a2ff]/10 w-auto h-15 text-center flex items-center justify-evenly p-2 xl:px-3 rounded-lg gap-2 lg:gap-1 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-[#51a2ff]/10 hover:text-[#51a2ff] hover:shadow-[0px_0px_30px_#51a2ff] "
                  key={data.name}
                >
                  {data.logo}
                  <p title={data.name} className="text-[15px] md:text-[17px] ">
                    {data.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default skills;
