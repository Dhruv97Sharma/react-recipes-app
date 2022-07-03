import React from 'react'
import PopularRecipe from '../components/PopularRecipe'
import Veggie from '../components/Veggie'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <Veggie />
        <PopularRecipe />
    </motion.div>
  )
}

export default Home