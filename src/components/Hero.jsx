import { ComputersCanvas } from "./canvas";
import { styles } from "../style";
import { MouseEffect } from ".";


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
      <MouseEffect />

    </section>
  );
};

export default Hero;
