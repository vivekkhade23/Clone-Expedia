import React from 'react'
import { GridItem, Input, InputGroup, InputLeftElement, Grid, Box, Checkbox, Spacer, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { DatePicker } from 'chakra-ui-date-input'
import { useNavigate } from 'react-router-dom';



function Package() {
    const navigate=useNavigate();
  return (
    <div>
        <Box  w={"1000px"} marginLeft={"250px"} Spacer={"20px"}>
        <br />
            <hr />
            <br />
            <br />
            <Grid templateAreas={[
        `"ape ape ape ape "
        "ball ball cat cat"
         "dog dog dog dog"`,
        `"ape  ball cat dog"
        "ape  ball cat dog"
        "ape  ball cat dog"`,
        `"ape  ball cat dog"
        "ape  ball cat dog"
        "ape  ball cat dog"`
    ]} alignContent={"center"}>
        <GridItem area={"ape"}>
            <InputGroup w={"400px"} >
                <InputLeftElement
                    pointerEvents='none'
                    children={<FaMapMarkerAlt />}
                />
                <Input type='text' placeholder='Going to' />
            </InputGroup>
        </GridItem>
        <GridItem area={"ball"}>
            <InputGroup w={"200px"} >
                <DatePicker
                    placeholder='Check-in'
                    name='date'
                    onChange={(date) => console.log(date)}
                />
            </InputGroup>
        </GridItem>
        <GridItem area={"cat"}  >
            <InputGroup w={"200px"}>
                <DatePicker
                    placeholder='Check-out'
                    name='date'
                    onChange={(date) => console.log(date)}
                />
            </InputGroup>
        </GridItem>
        <GridItem area={"dog"}>
            <InputGroup w={"300px"} >
                <InputLeftElement
                    pointerEvents='none'
                    children={<FaUserAlt />}
                />
                <Input type='text' placeholder='travelers' />
            </InputGroup>
        </GridItem>
    </Grid>
       <Box>
    <Button onClick={navigate("/search")} color={"white"} bg={"#3662d8"}>Search</Button>
</Box>
<hr />
    </Box>
    </div>
  )
}

export default Package