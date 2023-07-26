import { motion } from "framer-motion"



function TopLine() {
  
  return (
    <motion.div initial={{ width: 0, height: 1 ,backgroundColor: "#ececec" }}
      animate={{width:"100%"}}
      transition={{duration:2}}>
      
    </motion.div>
  )
}

export default TopLine