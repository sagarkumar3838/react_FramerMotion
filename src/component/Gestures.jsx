import React from 'react'
import { motion, MotionConfig } from 'motion/react'
const Gestures = () => {
  return (
    <div>
      <div className='grid justify-center items-center mt-20 gap-1'>
        <MotionConfig
        transition={{
            duration: 0.125, 
            ease: 'easeInOut',
        }}
        
        // iss component ka use kar ka agr common value animation ka lagana ha toh dono button ka upper toh motionconfig ka use karege.
        // dono button ka upper same property lag jayega transition ka upper.
        >

        <motion.button 
      whileHover={{scale:1.2,  rotate: "-2.5deg"}}
    //   mouse sa hover karege button ka upper ma  toh whileHover ma changes hoga.
      whileTap={{scale:0.8 , }}
    //   whileTap as it is rahega .
      type="button" onClick={()=> setIsVisible(!isVisible)} className="focus:outline-none text-white bg-purple-700
             hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
             font-medium rounded-lg text-sm px-5 py-2.5 mt-5 mb-4
              dark:bg-purple-600 dark:hover:bg-purple-700
               dark:focus:ring-purple-900">Click Me</motion.button>

<motion.button 
      whileHover={{scale:1.2,   rotate: "2.5deg"}}
    //   mouse sa hover karege button ka upper ma  toh whileHover ma changes hoga.
      whileTap={{scale:0.8 , }}
    //   whileTap as it is rahega .
      type="button" onClick={()=> setIsVisible(!isVisible)} className="focus:outline-none text-white bg-purple-700
             hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
             font-medium rounded-lg text-sm px-5 py-2.5 mt-5 mb-4
              dark:bg-blue-600 dark:hover:bg-blue-700
               dark:focus:ring-blue-900">Click Me</motion.button>

        </MotionConfig>
    

      </div>
    </div>
  )
}

export default Gestures
