import { GridItem, Input, InputGroup, InputLeftElement, Grid, Box, Checkbox, Spacer, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { DatePicker } from 'chakra-ui-date-input'
import { useState } from "react";

export function Stay() {
    const [check, setCheck] = useState(false);


    const Checking = () => {
        console.log(check)
        setCheck(!check);
        console.log(check)

    }
    return <Box  w={"1000px"} marginLeft={"250px"} Spacer={"20px"}>
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
        <br />
        <GridItem area={"dog"}>
            <InputGroup w={"300px"} >
                <InputLeftElement
                    pointerEvents='none'
                    children={<FaUserAlt />}
                />
                <Input type='text' placeholder='travelers' />
            </InputGroup>
        </GridItem>
        <br />
    </Grid>
        <Box display={"flex"} w={"550px"} >
       <Box display={"flex-column"}> 
         <Box>
     <Checkbox onChange={Checking}>Add a flight</Checkbox></Box>
            <Box>{check === true ? <InputGroup w={"300px"} >
                <InputLeftElement
                    pointerEvents='none'
                    children={<FaMapMarkerAlt />}
                />
                <Input type='text' placeholder='Leaving from' />
            </InputGroup> : null}</Box>
            </Box>  
            <Spacer />
            <Checkbox marginLeft={"-1250px"}>Add a Car</Checkbox>
        </Box>
<br />
        <Spacer />
<Box>
    <Button color={"white"} bg={"#3662d8"}>Search</Button>
</Box>
<br />
<hr />
    </Box>
}