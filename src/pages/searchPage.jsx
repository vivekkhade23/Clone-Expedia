import { Box, Checkbox, Container, HStack, Image, Input, Radio, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Filter from '../Components/Filter'
import HotelCard from '../Components/hotelCard'
import Leftbar from '../Components/Leftbar'
import Navbar from '../Components/Navbar'
// import { Box, Checkbox, HStack, Input, Radio, Text, VStack } from '@chakra-ui/react'
// import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
  
import data from "../data/data.json"
import { useState } from 'react'
import Footer from '../Components/Footer'
console.log("dtata",data.hotelDetails)
function SearchPage() {
  const [flag,setFlag]=useState(false)
let [info,setInfo]=useState([]);
const handleRating4=()=>{

  setInfo(data.hotelDetails.filter(item=>item.rating>=4))

}
const handleRating3=()=>{
  console.log("vfrjhvgfdcvjnewkcd jdh",data)
setFlag(true)
   setInfo(data.hotelDetails.filter(item=>item.rating>=3))



}
const handleRating2=()=>{
  console.log("vfrjhvgfdcvjnewkcd jdh",data)
  setFlag(true)
   setInfo(data.hotelDetails.filter(item=>item.rating>=2))


}
const handleRating1=()=>{
  console.log("vfrjhvgfdcvjnewkcd jdh",data)
  setFlag(true)
   setInfo(data.hotelDetails.filter(item=>item.rating>=1))

}
const handleRating5=()=>{
  console.log("vfrjhvgfdcvjnewkcd jdh",data)
  setFlag(true)
   setInfo(data.hotelDetails.filter(item=>item.rating>=5))

}
const handlechange=({value})=>{
  setFlag(true)
  console.log("value",value)
let x=  data.hotelDetails.sort((a, b) => {
    return a.value - b.value;
});
console.log("viv",x);
setInfo(x)
}

  return (<Box>
    <Navbar/>
         <Container w={"1300px"} display="flex" marginLeft={"-10px"}>
        <Box  >
        <VStack backgroundColor={"#f8f5f4"} w={"345px"}gap={3}>
            <hr />
            <Text > <h1> Search by property name</h1></Text>
            <Input backgroundColor={"white"} w="250px" placeholder='e.g Best Western'/>
            <hr />
            <Text as={"h1"}> <h1>Filter by</h1> </Text>
            <Text><h2>Popular filters</h2></Text>
   <Box justifyContent={"start"} >
         <ul>   <Checkbox >Free airport shuttle</Checkbox> </ul>
         <ul>     <Checkbox >All inclusive</Checkbox></ul>
         <ul>     <Checkbox >Hot tubx</Checkbox></ul>
         <ul>    <Checkbox >Breakfast included</Checkbox></ul>
            <ul>    <Checkbox >Bed & breakfast</Checkbox></ul>
            </Box>  


<Text>Price per night</Text>
<Text>$0 to 300$</Text>
<Slider aria-label='slider-ex-1' defaultValue={100} w="240px">
  <SliderTrack >
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>

<Text>
Guest rating
</Text>

<Radio size='sm' name='1' colorScheme='red'>
  any
  </Radio>
  <Radio size='sm' name='1' colorScheme='red'>
  Wonderful 4.5+
  </Radio>
  <Radio size='sm' name='1' colorScheme='red'>
   
Very good 4+
  </Radio>
  <Radio size='sm' name='1' colorScheme='red'>
  Good 3.5+
  </Radio>
<Text>
Star rating
</Text>
<HStack>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white" onClick={handleRating1}>1★</Box>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white" onClick={handleRating2}>2★</Box>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white"onClick={handleRating3}>3★</Box>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white" onClick={handleRating4}>4★</Box>
</HStack>
<Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white"onClick={handleRating5}>5★</Box>

<Box>
Payment type
</Box>
<ul>   <Checkbox >Fully refundable</Checkbox> </ul>
         <ul><Checkbox >Reserve now, pay later</Checkbox></ul>


            </VStack> 
          </Box  > 
         <Box   >
          <HStack>
            <Box>
<Text>556 properties</Text>
<Text>See how we pick our recommended properties</Text>
</Box>
<Box>
<Select  placeholder='Recommended' onChange={(value)=>handlechange(value)}>
  <option value='Recommended'>Recommended</option>
  <option value='total'>price </option>
  <option value='rating' >rating</option>
</Select>
</Box>
</HStack>
                {flag===true? info?.map(item=>  
        <HotelCard data={item}/>
            ):
          data.hotelDetails?.map(item=>  
        <HotelCard data={item}/>
            )}
              </Box>

<Box >
  <Image w={"300px"} h={"400px"}  src="https://tpc.googlesyndication.com/simgad/17447823249981941085?"/>
  </Box>

              </Container>
              <Footer/>
              </Box>
  )
}

export default SearchPage