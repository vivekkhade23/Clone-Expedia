import { Box, Button, Grid, GridItem, Input, InputGroup, InputLeftElement, Spacer } from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Flight() {
    const navigate=useNavigate();
  return (
 <Box padding={"20px"}  w={"1000px"} marginLeft={"250px"}>
       <br />
            <hr />
            <br />
            <br />
<Grid   gridTemplateAreas={[
    `"ape ball cat"
    "ape ball cat"
    "ape ball cat"`,
    `"ape ape ape"
    "ball ball cat"
    "ball ball cat"`
]} gap={"20px"} marginLeft={"200px"} w={"1200px"} Spacer={"20px"}>
<GridItem area={"ape"} >
            <InputGroup w={"400px"} gap={"20px"}  >
                <InputLeftElement
                    pointerEvents='none'
                    children={<FaMapMarkerAlt />}
                />
                <Input type='text' placeholder='Going to' />
            </InputGroup>
        </GridItem>
        <Spacer/>
        <GridItem area={"ball"} gap={"20px"} >
            <InputGroup w={"400px"} >
            <InputLeftElement
                    pointerEvents='none'
                    children={<FaMapMarkerAlt />}
                />
                <Input type='text' placeholder='Leaving from' />
            </InputGroup>
        </GridItem>
        <Spacer/>
        <GridItem area={"cat"} marginLeft={"-420px"}   >
            <InputGroup w={"200px"}>
                <DatePicker
                    placeholder='Check-out'
                    name='date'
                    onChange={(date) => console.log(date)}
                />
            </InputGroup>
        </GridItem>
</Grid>
<Box>
    <Button color={"white"} onClick={navigate("/search")} bg={"#3662d8"}>Search</Button>
</Box>
<hr />
</Box>
  )
}

export default Flight;