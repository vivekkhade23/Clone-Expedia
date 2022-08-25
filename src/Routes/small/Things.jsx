import { GridItem, Input, InputGroup, InputLeftElement, Grid, Box, Checkbox, Spacer, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { DatePicker } from 'chakra-ui-date-input'
import { useState } from "react";


function Things() {
  return (
    <div>
         <Box padding={"20px"}  w={"1000px"} marginLeft={"200px"}>
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
        <GridItem area={"cat"} marginLeft={"-350px"}   >
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
    <Button color={"white"} bg={"#3662d8"}>Search</Button>
</Box>
<hr />
</Box>
    </div>
  )
  }
export default Things