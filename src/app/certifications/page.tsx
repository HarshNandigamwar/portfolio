"use client";
import { useScrollToTop } from "@/Utils/useScrollToTop";
const certification = () => {
  useScrollToTop();
  const certification = [
    {
      name: "Accenture",
      img: "https://res.cloudinary.com/darmatnf2/image/upload/v1761029046/Accenture_kcoo9d.png",
      disc: "Awarded the Certificate of Completion for the Accenture Developer and Technology Job Simulation.Practical tasks covered the Software Development Lifecycle and Testing Lifecycle.The curriculum also included Agile and Waterfall methodologies and Algorithmic Thinking.This professional development was completed on December 21st, 2024.",
    },
    {
      name: "AWS",
      img: "https://res.cloudinary.com/darmatnf2/image/upload/v1761029051/AWS_yu4vat.png",
      disc: "Awarded the Certificate of Completion for the AWS Solutions Architecture Job Simulation.The practical tasks focused on Designing a simple, scalable,hosting architecture.This virtual experience provided hands-on exposure to core AWS architectural concepts.This professional development was completed on April 4th, 2025.",
    },
    {
      name: "IBM",
      img: "https://res.cloudinary.com/darmatnf2/image/upload/v1761029055/IBM_yyzqdd.png",
      disc: "Awarded the credential for Web Development Fundamentals issued by IBM SkillsBuild.This foundational course provided a strong understanding of core web technologies.It covers the essential concepts and practices required for developing web applications.The certification was successfully issued on February 21st, 2024.",
    },
    {
      name: "Hackhazards Hackathon",
      img: "https://res.cloudinary.com/darmatnf2/image/upload/v1761029069/Hackathon_zfgblj.png",
      disc: "Awarded the Certificate of Participation for HACKHAZARDS '25, a major community-run hackathon.I participated as part of Team The Hackoholics in this global event.The hackathon focused on developing cutting-edge projects across AI, Web3, Software, and Infra.The event took place from April 11th - 27th, 2025, organized by The NAMESPACE Community.",
    },
  ];

  return (
    <div className="mb-15 w-full pt-15">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-center font-mono text-5xl md:text-6xl text-purple-400 font-semibold">
          Certifications
        </h2>
      </div>
      <div className="w-full p-5 flex flex-col items-center ">
        {/* Card */}
        {certification.map((data) => (
          <div
            key={data.name}
            className="bg-purple-900/20 border border-purple-400 rounded-md shadow-lg overflow-hidden group hover:shadow-purple-400/40 transition-all mt-5 md:flex  "
          >
            {/* Section 1 */}
            <div className="w-full p-2 md:flex md:flex-col md:items-center md:justify-center">
              {/* Certificate Image */}
              <img
                src={data.img}
                alt={data.name}
                className="object-cover rounded-md border "
                loading="lazy"
              />
            </div>
            {/* Section 2 */}
            <div className="p-2">
              {/* Provider name */}
              <h2 className="text-2xl text-purple-400 md:text-4xl md:font-semibold md:text-center md:mt-5 ">
                {data.name}{" "}
              </h2>
              {/* Description */}
              <p className=" md:text-2xl md:mt-4 ">{data.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default certification;
