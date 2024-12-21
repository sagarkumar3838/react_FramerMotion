import React, { useRef , useEffect } from 'react'
import { motion , useInView } from 'motion/react'

const ViewBaseAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref , {once: true});

    useEffect(()=> {
        console.log('Is in View ->', isInView);
    }, [isInView]);

  return (
    <>
      <div  className='h-[150vh]'/>
      <motion.div
      className="h-screen bg-black"

      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      />

      <div ref={ref} className='h-screen bg-red-700 transition duration-100 {isInView ? "bg-blue-500" : "bg-red-500"} '/>

    </>
  )
}

export default ViewBaseAnimations



// useInView: This is a custom hook that monitors the visibility of a DOM element. It returns a boolean value indicating whether the element is in the viewport.

// ref: This is a reference to a DOM element. You typically create this reference using the useRef hook in React. The ref is passed to the element you want to observe.

// { once: true }: This is an options object that configures the behavior of the useInView hook. The once: true option means that the hook will only trigger the visibility check once.
//  After the element becomes visible for the first time, it will stop observing it. 
// This is useful for scenarios where you only need to know if an element has entered the viewport once (e.g., triggering an animation or loading content).