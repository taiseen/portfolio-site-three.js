import { motion } from "framer-motion";


const MouseEffect = () => (

    // Scrolling Mouse Effect
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
);

export default MouseEffect