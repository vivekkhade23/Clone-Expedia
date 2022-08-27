import { Box, Checkbox, HStack, Input, Radio, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
  
function Filter({handleRating}) {
  console.log(handleRating)
  return (
    <div>
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
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white">1★</Box>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white">2★</Box>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white">3★</Box>
    <Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white" onClick={()=>handleRating()}>4★</Box>
</HStack>
<Box border={"1px solid"} padding="7px" w={"50px"} borderRadius={10} bgColor="white">5★</Box>

<Box>
Payment type
</Box>
<ul>   <Checkbox >Fully refundable</Checkbox> </ul>
         <ul><Checkbox >Reserve now, pay later</Checkbox></ul>


            </VStack> 

    </div>
  )
}

export default Filter