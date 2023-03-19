import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../style";


const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>

      {/* Short Intro... */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto 
          ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Vertical Bar Styling */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Taiseen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm trying to develop 3D visuals, user <br className='hidden sm:block' />
            interfaces & web apps...
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scrolling Mouse Effect */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* go to about section */}
        <a href='#about'>
          {/* Fix Area */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* Moving Area */}
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
