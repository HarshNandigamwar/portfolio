"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const home = () => {
  return (
    <div className="w-full flex flex-col md:flex-row p-2 items-center pt-20">
      {/* Image */}
      <div className="p-2 w-[50%] hidden md:flex items-center justify-center">
        <Image
          src="/images/ShriharshImage.jpg"
          alt="N/A"
          width={500}
          height={0}
          className="rounded-2xl"
          sizes="(max-width:768px) 100vw,320px"
        />
      </div>
      <div className="p-2 w-[50%] flex md:hidden items-center justify-center">
        <Image
          src="/images/ShriharshImage.jpg"
          alt="N/A"
          width={200}
          height={200}
          className="rounded-2xl"
        />
      </div>
      {/*Info  */}
      <div className="text-center p-2 w-full md:w-[50%]">
        <h2 className="text-3xl md:text-5xl xl:text-4xl mb-2"> Hello, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400">
          Shriharsh Nandigamwar
        </h1>
        <h2 className="text-xl md:text-4xl font-medium mb-4">
          {" "}
          FullStack Developer
        </h2>
        <p className="text-[18px] md:text-[25px] lg:text-[22px] mb-4">
          A Full Stack Developer passionate about crafting seamless digital
          experiences. Always excited to tackle new challenges where I can
          create value and grow as a coder. Let&apos;s connect if you&apos;ve
          got a project that could use my skills!
        </p>
        {/* Button */}
        <div className="flex justify-center relative gap-4 top-5 ">
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{
              backgroundColor: "#9766e3",
            }}
            transition={{ duration: 0.2 }}
            className="seeMyWorkBtn border border-purple-400 text-purple-400 h-10 w-40 flex items-center justify-center px-6 py-3 rounded-full transition ease-in-out hover:text-black"
            href=""
          >
            See My Work
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{
              backgroundColor: "#9766e3",
            }}
            transition={{ duration: 0.2 }}
            className="seeMyWorkBtn border border-purple-400 text-purple-400 h-10 w-40 flex items-center justify-center px-6 py-3 rounded-full transition ease-in-out hover:text-black"
            href=""
          >
            Let's Connect
          </motion.a>
        </div>
        <div className="relative top-10 flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Social link */}
          <div className=" flex">
            {/* GitHub */}
            <a
              href="https://github.com/HarshNandigamwar"
              className="flex justify-center items-center w-[50px] h-[50px] rounded-full border border-purple-400 m-[0_10px] shadow-[0px_0px_4px_#00000027] duration-75 hover:shadow-[0px_0px_6px_3px_#00000027] active:scale-80"
              target="_blank"
            >
              <svg
                className="cf-icon-svg h-[25px] w-[25px] fill-white hover:fill-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2.5 0 19 19"
              >
                <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
              </svg>
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex justify-center items-center w-[50px] h-[50px] rounded-full border border-purple-400 m-[0_10px] shadow-[0px_0px_4px_#00000027] duration-75 hover:shadow-[0px_0px_6px_3px_#00000027] active:scale-80"
              target="_blank"
            >
              <svg
                viewBox="0 -2 44 44"
                className="h-[25px] w-[25px] fill-white hover:fill-purple-400"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Icons" stroke="none" strokeWidth="1">
                  <g transform="translate(-702.000000, -265.000000)">
                    <path
                      d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                      id="LinkedIn"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/Harsh477011?s=09"
              className="flex justify-center items-center w-[50px] h-[50px] rounded-full border border-purple-400 m-[0_10px] shadow-[0px_0px_4px_#00000027] duration-75 hover:shadow-[0px_0px_6px_3px_#00000027] active:scale-80"
              target="_blank"
            >
              <svg
                className="h-[25px] w-[25px] fill-white hover:fill-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </a>
          </div>
          {/* Resume Button */}
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/documents/Shriharsh_Nandigamwar_resume.pdf"
            download="ShriharshNandigamwar_FullstackDeveloper.pdf"
          >
            <button className="relative p-[10px_20px] border border-purple-400 text-purple-400 cursor-pointer text-[1.1rem] rounded-md hover:bg-purple-400 hover:text-black active:scale-80 ">
              Download CV
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default home;
