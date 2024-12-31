import { motion } from "framer-motion";
import { styles } from "../styles";
import { developer } from "../assets";

const Hero = () => {
  return (
    <section className={`justify-center relative w-full h-screen mx-auto`}>
      <div
        className={`flex relative justify-center items-center inset-0 top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#B22222]" /> {/* Cherry Red */}
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#B22222] to-[#000080]" /> {/* Cherry Red to Navy Blue gradient */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#BDBEBE]`}>
            Hi, I'm <span className="text-[#B22222]">Abhi</span> {/* Cherry Red */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#BDBEBE]`}> {/* Off White */}
            <br className="sm:block hidden" />
            Web Developer
          </p>
        </div>
        <img src={developer} className="sm:flex hidden" />

      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#000080] flex justify-center items-start p-2"> {/* Navy Blue */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#B22222] mb-1" 
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
