import React, { useState } from 'react'
import { motion , AnimatePresence} from "motion/react"

const BasicMOtion1 = () => {

    const [isVisible , setIsVisible] = useState(true);
  return (
    <div>
       <div className='grid justify-center items-center mt-20 gap-1'>
       <button type="button" onClick={()=> setIsVisible(!isVisible)} className="focus:outline-none text-white bg-purple-700
             hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
             font-medium rounded-lg text-sm px-5 py-2.5 mt-5 mb-4
              dark:bg-purple-600 dark:hover:bg-purple-700
               dark:focus:ring-purple-900">Purple</button>

               
            <AnimatePresence>
            {isVisible && (
                <div>
                <motion.div
                  initial={{rotate: "0deg", scale:0, y:0}}
                  animate={{rotate: "360deg", scale:1, transition: {duration: 2}, y:[0, 150, -150 , -150 , 0]}}
                  
                  transition={{duration:1, ease: "backInout", times:[0, 0.25, 0.5, 0.85,1]}}
                  // times isiliye de raha ha ki jo Y-axis 4 values diya ha usko repeat kar ek ek kar ka.
                  // times ko 0 sa 1 tak hi divide kiye ha .
                    className='w-[100px] h-[100px] bg-sky-500 border-0' />
            </div>
            )}

            </AnimatePresence>
           

            
        </div>
    </div>
  )
}

export default BasicMOtion1
