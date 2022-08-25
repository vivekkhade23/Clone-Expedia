import { Box } from '@chakra-ui/react'
import React from 'react'
import HotelCard from '../Components/hotelCard'

import data from "../data/data.json"
console.log("dtata",data.hotelDetails)
function SearchPage() {
  return (
            <Box>
                {
          data.hotelDetails?.map(item=>  
        <HotelCard data={item}/>
            )}
              </Box>
  )
}

export default SearchPage