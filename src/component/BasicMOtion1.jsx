import React, { useState } from 'react'
import { motion , AnimatePresence} from "motion/react"

const BasicMOtion1 = () => {

    const [isVisible , setIsVisible] = useState(true);
  return (
    <div>
       <div className='grid justify-center items-center h-screen gap-1'>
            <AnimatePresence>
            {isVisible && (
                <div>
                <motion.div
                  initial={{rotate: "0deg", scale:0}}
                  animate={{rotate: "360deg", scale:1, transition: {duration: 2}}}
                  
                  transition={{duration:1, ease: "backInout"}}
                    className='w-[100px] h-[100px] bg-sky-500 border-0' />
            </div>
            )}

            </AnimatePresence>
           

            <button type="button" onClick={()=> setIsVisible(!isVisible)} className="focus:outline-none text-white bg-purple-700
             hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
             font-medium rounded-lg text-sm px-5 py-2.5 mt-5
              dark:bg-purple-600 dark:hover:bg-purple-700
               dark:focus:ring-purple-900">Purple</button>
        </div>
    </div>
  )
}

export default BasicMOtion1
