import React from 'react'
import { motion } from "motion/react"


const BasicsMotion = () => {
    return (
        <div className='grid justify-center items-center h-screen gap-1'>
            <div>
                <motion.div
                   whileHover={{ scale: 2.0 }}
                   whileTap={{ scale: 0.8 }}
                    className='w-[100px] h-[100px] bg-sky-500 border-0' />
            </div>
        </div>
    )
}

export default BasicsMotion
