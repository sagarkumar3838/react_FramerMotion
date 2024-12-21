import React from 'react'
import { motion , useAnimationControls} from 'motion/react'

const AnimationControls = () => {

    const controls = useAnimationControls();

    const handleClick =()=>{
        controls.start("flip");
    }
  return (

    // flip button ka upper click karne pa jo <div> ha </div> woh 360 rotate karega.

    <div className='grid justify-center gap-4 mt-40'>
        <button onClick={handleClick} className='focus:outline-none text-white bg-purple-700
             hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
             font-medium rounded-lg text-sm px-5 py-2.5 mt-5 mb-4
              dark:bg-blue-600 dark:hover:bg-blue-700
               dark:focus:ring-blue-900'>Flip it</button> 
        <motion.div
        variants={{
            initial:{
                rotate:"0deg",
            },
            flip:{
                rotate:"360deg",
            }
        }}initial="initial"
        animate={controls}
        
        // variants ko props ki taraha pass kar rahe ha .
        // yaha initial="initial" ka mltb ha ki rotate:"0deg",
        // par flip karne ka liye button ma click karna padega .
        className='w-[150px] h-[150px] bg-black'></motion.div>
      
    </div>
  )
}

export default AnimationControls


// useAnimationContols() kar ka hook ha jo usko pass kar rahe ha handleClick ka ka function ma or motion
// div ma use kar rahe ha  animate={controls} ko 
// hum logo variants pass kar raha ha as  Props.

// controls.start("flip"); flip jo woh variant sa pass kar raha ha controls ma
