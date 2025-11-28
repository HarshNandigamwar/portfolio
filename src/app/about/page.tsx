import Image from "next/image";
import ScaleOnView from "@/components/ScaleOnView";
import Link from "next/link";
const about = () => {
  return (
    <div id="about" className="h-screen w-full pt-15">
      <h2 className="text-center font-mono text-6xl text-[#51a2ff] font-semibold">
        About Me
      </h2>
      <div className="mt-10 p-2 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <ScaleOnView>
          <div className="p-2 hidden md:flex items-center justify-center">
            <Image
              src="/images/Shriharsh.jpg"
              alt="N/A"
              width={300}
              height={0}
              className="rounded-2xl"
              sizes="(max-width:768px) 100vw,320px"
            />
          </div>
        </ScaleOnView>
        {/* info */}
        <ScaleOnView>
          <div className="p-2 rounded-xl">
            <h3 className="text-2xl font-semibold text-accent mb-5">
              I’m{" "}
              <span className="font-bold text-[#51a2ff]">
                Shriharsh Nandigamwar
              </span>
            </h3>
            <p className="leading-relaxed">
              A dedicated Full Stack Developer with a strong passion for
              building fast, functional, and visually engaging web applications.
              <br />I enjoy working across the modern web stack from creating
              clean, responsive user interfaces with{" "}
              <span className="text-[#51a2ff] font-semibold">React.js</span> to
              developing secure and scalable backend systems using{" "}
              <span className="text-[#51a2ff] font-semibold">Node.js</span>,{" "}
              <span className="text-[#51a2ff] font-semibold">Express</span>, and{" "}
              <span className="text-[#51a2ff] font-semibold">MongoDB</span>
              .
              <br />I have a keen interest in building real-world projects,
              solving meaningful problems through code, and collaborating with
              other developers. I also believe in continuous learning to stay up
              to date with the latest technologies and best practices in the
              ever-changing tech world.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {/* Experience */}
              <Link href="/experience">
                <div title="Explore Experience" className="hover:text-[#51a2ff]">
                  <h4 className="font-semibold text-accent mb-2  flex items-center">
                    Experience{" "}
                  </h4>
                  <p>1 Internship</p>
                </div>
              </Link>
              {/* Project */}
              <Link href="/projects">
                <div title="Explore Project" className="hover:text-[#51a2ff]">
                  <h4 className="font-semibold text-accent mb-2  flex items-center ">
                    Projects{" "}
                  </h4>
                  <p>4+ Completed</p>
                </div>
              </Link>
              {/* Certification */}
              <Link href="/certifications">
                <div title="Explore certification" className="hover:text-[#51a2ff]">
                  <h4 className="font-semibold text-accent mb-2  flex items-center ">
                    Certifications
                  </h4>
                  <p>3+ Won</p>
                </div>
              </Link>
            </div>
          </div>
        </ScaleOnView>
      </div>
    </div>
  );
};

export default about;
