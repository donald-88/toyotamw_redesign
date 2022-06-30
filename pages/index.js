import Image from 'next/image'
import Head from 'next/head'
import Landing from './landing'
import Models from './models'
import Car from '../components/canvas/scene'
import { motion } from 'framer-motion'

export default function Home() {

  const backgroundVariant = {
    start: {
      x:0
    },
    end: {
      x:"100vw"
    }
  }

  return (
      <div className="">
        <div className="fixed backdrop-blur-3xl bg-black bg-opacity-5 z-negative h-screen w-screen"/>
        <motion.div className="fixed top-0 left-40 bg-yellow-700 rounded-full h-32 w-32 z-negativeTwo"
          initial="start"
          animate="end"
          transition={{duration:20, delay:2}}/>

        <Car/>
        <Models/>
      </div>
  )
}
