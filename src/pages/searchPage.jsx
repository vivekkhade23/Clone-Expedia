import { Box, Container, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Filter from '../Components/Filter'
import HotelCard from '../Components/hotelCard'
import Leftbar from '../Components/Leftbar'

import data from "../data/data.json"
console.log("dtata",data.hotelDetails)
function SearchPage() {
  return (
         <Container w={"1300px"} display="flex" border="1px solid green" marginLeft={"-10px"}>
        <Box  border="1px solid" >
     <Filter />
          </Box  > 
         <Box border="1px solid red"  >
                {
          data.hotelDetails?.map(item=>  
        <HotelCard data={item}/>
            )}
              </Box>

<Box w={"500px"} marginLeft={"50px"}><Leftbar/></Box>

              </Container>
  )
}

export default SearchPage