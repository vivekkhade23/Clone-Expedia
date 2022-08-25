import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { Qrsection } from '../../Components/QR'
import Smallnavbar from '../../Components/smallnavbar'
import SmallRoutes from '../small/SmallRoutes'
import data from "../../data/data.json"


function Home() {
  console.log("data",data)
  return (
    <Box>
        <Navbar/>
        <br />
     <Smallnavbar/>
     <SmallRoutes/>
     <br />
     <Qrsection/>
     <br />
     <Footer/>
    </Box>
  )
}

export default Home