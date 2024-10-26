import React from 'react'
import {motion} from "framer-motion";

const App = () => {
  return (
    <div>
   <motion.div 
  //  initial ={{
  //   x:300
  //  }}
  //  animate={{
  //   x:1000,
  //   y:500,
  //   rotate:360,

    
  //  }}
  //  transition={{
  //   duration:2,
  //   delay:1,
  //   ease:"anticipate",
  //   repeat:Infinity
  //  }}
  drag
  dragConstraints={{
    top:0,
    left:0,
    right:1000,
    bottom:300
  }}
  dragDirectionLock='true'
  whileHover={{
    background:"green"
  }}
  whileTap={{
    scale:0.5
  }}
   id ="box">
    
   </motion.div>
   </div>
  )
}

export default App