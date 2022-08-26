// import data from "../data/data.json"



import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, HStack, Icon, Image, Spacer, Text, VStack } from '@chakra-ui/react'
// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useState } from 'react';

// let data={_id:"1",images:" fhgcjr",city :"wani",refund:"123", shortDescription:"edefvf",
// hotelName:"raj",offerPrice:"2325",originalPrice:"55556",paymentMode:"url",roomsLeft:"45",review:"12345",rating:"4",
// reviewCount:"662"}

function HotelCard({data}) {
    const [colorSet, setColorSet] = useState(false)
    const {
        p1,
        p2,
        id,
        img,
        city,
        refund,
         total,
        name,
      details,
        price,
        payments,
        roomsLeft,
        reviews,
        rating,
        count,
    } =data
    console.log("ejglkdblidvjvdvkvdhhn",data)
    return (
        <HStack boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} w={"790px"} marginLeft={"20px"} gap={4}>
        <Box
            w="280px"      
            borderWidth="1px"
            borderRadius="lg"
            backgroundColor="white"
            overflow="hidden"
            marginTop="25"
            marginBottom="25"
            cursor="pointer">
       
        <Box>
          <Image src={img} h="320px" />
        </Box>
        </Box>
        <VStack  w="550px">
        <Box>
        <Box
            h="30px"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
   >
           {name}
          </Box>
       <Box>
        {details}
       </Box>
        </Box>
        <Box h="20px" display="flex" alignItems="baseline" justifyContent="space-between">
          
          <Spacer />
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2">
            <Heading as="h6" size="xs">
              {/* {refund} */}
             { refund}
            </Heading>
          </Box>
          <Spacer />
          {/* <Icon
            as={colorSet ? AiTwotoneHeart : AiOutlineHeart}
            w={5}
            h={5}
            overflow="hidden"
            color={colorSet ? "red" : null}
            // onClick={handleIconClick}
          /> */}
        </Box>
        <Box mt="1" h="25px">
            <Box as="span" color="gray.600" fontSize="sm">
               {p1} 
               <br />
               {p2}
            </Box>
          </Box>
          <br />
          <br />
          <Box display="flex" alignItems="baseline" mt="1" h="25px" justifyContent="space-between">
            <Box>
              <Box as="span" color="gray.600" fontSize="sm">
        Payment Mode :--  {payments}
              </Box>
              </Box>
        
            </Box>
    
            <Box>
              <Box
                display="flex"
                gap={1}
                alignItems="baseline"
                as="span"
                color="gray.600"
                fontSize="sm"
                justifyContent="space-between"
              >
                <br />
                <Heading as="h2" size="xs">
                  Rs.{total}
                </Heading>
                <Text fontSize="xs" as="del">
                  Rs.{total+price}
                </Text>
              </Box>
            </Box>
          
          <br />
          <Box display="flex" mt="2" alignItems="center" h="25px" justifyContent="space-between">
            <Badge borderRadius="full" px="2" colorScheme="yellow" mt="1">
              {reviews}
            </Badge>
            <Spacer />
            <Badge borderRadius="full" px="2" colorScheme="yellow" mt="1">
              Rooms Left {roomsLeft}
            </Badge>
          </Box>
          <br />
          <Box display="flex" mt="2" alignItems="center" h="20px" justifyContent="space-between">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating? "pink.500" : "gray.300"}
                />
              ))}
            <Spacer />
            <br />
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              <Heading as="h6" size="xs">
                {count}
              </Heading>
            </Box>
          </Box>
          </VStack>
        <br />
        <br />
        </HStack>


    )
}

export default HotelCard;