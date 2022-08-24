import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Qrsection } from '../Components/QR'
import Smallnavbar from '../Components/smallnavbar'
import SmallRoutes from '../Routes/SmallRoutes'

function Home() {
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