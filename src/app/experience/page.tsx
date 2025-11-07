"use client";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/Utils/useScrollToTop";

const experience = () => {
  useScrollToTop();
  return (
    <div className="mb-15 w-full pt-15">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-center font-mono text-5xl md:text-6xl text-purple-400 font-semibold">
          Experience
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>
      <div className="p-2 rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Internship Experience
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center ">
          {/* IMG */}
          <div>
            <img
              src="https://res.cloudinary.com/darmatnf2/image/upload/v1761029277/certificate_u1uqqd.png"
              alt="Certificate"
              className="rounded-xl md:w-100 "
              loading="lazy"
            />
          </div>
          {/* Disc */}
          <div>
            <div className="space-y-2 md:space-y-8 mt-2">
              <p className="text-lg ">
                <span className="font-semibold text-purple-400">Name:</span>{" "}
                <span>Shriharsh Vijay Nandigamwar</span>
              </p>
              <p className="text-lg ">
                <span className="font-semibold text-purple-400">
                  Internship:
                </span>{" "}
                <span>Web Development</span>
              </p>
              <p className="text-lg ">
                <span className="font-semibold text-purple-400">Company:</span>{" "}
                <span>SkillCraft Technology</span>
              </p>
              <p className="text-lg ">
                <span className="font-semibold text-purple-400">Duration:</span>{" "}
                <span className="text-[13px] md:text-lg  ">
                  15th February 2025 – 17th March 2025
                </span>
              </p>
              <p className="text-lg ">
                <span className="font-semibold text-purple-400">
                  Certificate ID:
                </span>{" "}
                <span> SCT/FEB25/5707</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center ">
          {/* Letter Button */}
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/documents/SkillCraft Tecnology Certificate & Letter of Recommendation.pdf"
            download="SkillCraft Tecnology Certificate & Letter of Recommendation.pdf"
            className="p-[10px_20px] border border-purple-400 text-purple-400 cursor-pointer text-[1.1rem] rounded-md hover:bg-purple-400 hover:text-black active:scale-80 transform transition-transform duration-300 hover:scale-105 "
          >
            Download Letter
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default experience;
